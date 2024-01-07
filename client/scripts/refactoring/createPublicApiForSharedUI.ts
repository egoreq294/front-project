import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

const isAbsolute = (value: string) => {
  const layers = [
    '@app',
    '@shared',
    '@entities',
    '@features',
    '@widgets',
    '@pages',
  ];
  return layers.some((layer) => value.startsWith(layer));
};

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const sharedUIDirecroty = project.getDirectory(
  path.resolve(__dirname, '../../src/shared/ui'),
);

const componentsDirs = sharedUIDirecroty?.getDirectories();

componentsDirs?.forEach((direcroty) => {
  const indexFilePath = direcroty.getPath() + '/index.ts';
  const indexFile = direcroty.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${direcroty.getBaseName()};'`;
    const file = direcroty.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });

    file.save();
  }
});

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const segments = value.split('/');

    const isSharedLayer = segments?.[0] === '@shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(value) && isSharedLayer && isUiSlice) {
      const result = value.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(result);
    }
  });
});

project.save();
