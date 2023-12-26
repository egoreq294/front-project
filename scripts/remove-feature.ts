import { Project, SyntaxKind, Node } from 'ts-morph';

const featureNameForRemove = process.argv[2];
const featureState = process.argv[3]; // on / off

if (!featureNameForRemove) {
  throw new Error('Укажите название фича флага');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) =>
  node.forEachChild((child) => {
    let isToggleFeatures = false;

    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true;
    }

    return isToggleFeatures;
  });

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) {
        return;
      }

      const featureNameProperty = objectOptions.getProperty('name');
      const onFunctionProperty = objectOptions.getProperty('on');
      const offFunctionProperty = objectOptions.getProperty('off');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureName !== featureNameForRemove) {
        return;
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
        return;
      }

      node.replaceWithText(onFunction?.getBody().getText() ?? '');
    }
  });
});

project.save();
