// @flow

export interface ModelType {
  instance: any;
}

export class Model {
  instance: any = {};

  constructor(valueOfInstance: any) {
    this.instance = valueOfInstance;
  }

  value(): any {
    return this.instance;
  }

  copyOfValue(): any {
    return {
      ...this.instance,
    };
  }

  copyOf(): any {
    return {
      ...this,
    };
  }

  // Getter
  getValue(propertyName: string): any {
    return this.instance[propertyName];
  }

  // Setter
  setValue(propertyName: string, propertyValue: any): any {
    // Here do the check of type of property
    this.instance[propertyName] = propertyValue;
    return this;
  }
}

export const ModelFactoryBuilder = (props: any = []): any => {
  const instance = {};
  props.forEach((prop) => {
    if (prop.defaultValue) {
      instance[prop.propertyName] = prop.defaultValue;
    } else {
      instance[prop.propertyName] = null;
    }
  });
  return new Model(instance);
};
