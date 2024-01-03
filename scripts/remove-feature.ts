import { Project, SyntaxKind, Node, JsxAttribute } from 'ts-morph';

const featureNameForRemove = process.argv[2];
const featureState = process.argv[3]; // on / off

const TOGGLE_FUNCTION_NAME = 'toggleFeatures';
const TOGGLE_COMPONENT_NAME = 'ToggleFeatures';

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
      child.getText() === TOGGLE_FUNCTION_NAME
    ) {
      isToggleFeatures = true;
    }

    return isToggleFeatures;
  });

const isToggleComponent = (node: Node) =>
  node.forEachChild((child) => {
    let isToggleComponent = false;

    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === TOGGLE_COMPONENT_NAME
    ) {
      isToggleComponent = true;
    }

    return isToggleComponent;
  });

const replaceToggleFunction = (node: Node): void => {
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
};

const getAttributeNodeByName = (jsxAttribute: JsxAttribute[], name: string) => {
  return jsxAttribute.find((node) => node.getNameNode().getText() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceToggleComponent = (node: Node): void => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== featureNameForRemove) {
    return;
  }

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
    return;
  }

  if (onValue) {
    node.replaceWithText(onValue);
  }
};

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      return replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      return replaceToggleComponent(node);
    }
  });
});

project.save();
