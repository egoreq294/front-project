const interfaceConst = 'interface';

module.exports = (componentName) => `import cn from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName}:FC<${componentName}Props> = ({className}) => { 
    const { t } = useTranslation();
    
    return <div className={cn(styles.${componentName}, className)}>{t('${componentName}')}</div>;
};`;
