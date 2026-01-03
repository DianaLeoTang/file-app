/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-06-27 11:26:39
 * @Description: 页面/组件/功能的描述
 * @FilePath: /file-app/src/components/ConfigProvider/interface.ts
 */
import { ReactNode } from 'react';
import { UploadProps } from '../File/interface';

type CalendarType = {
  today: string;
  view: Record<string, any>;
  month: {
    short: Record<string, any>;
    long: Record<string, any>;
  };
  week: {
    short: Record<string, any>;
    long: Record<string, any>;
  };
};

export interface Locale {
  locale: string;
}

export type ThemeConfig = Record<string, any>;

export type ComponentConfig = {
  Upload: UploadProps;
};

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  /**
   * @zh 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   * @en When there are two Chinese characters in the button, a space is automatically added between two Chinese characters.
   * @version 2.3.0
   */
  autoInsertSpaceInButton?: boolean;
  /**
   * @zh 用于全局配置所有组件的默认参数
   * @en Default parameters for global configuration of all components
   * @version 2.23.0
   */
  componentConfig: ComponentConfig;
  /**
   * @zh 设置语言包
   * @en Language package setting
   */
  locale?: Locale;
  /**
   * @zh 主题配置
   * @en Theme Configuration
   */
  theme?: ThemeConfig;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue arco
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  getPopupContainer?: (node: HTMLElement) => Element;
  /**
   * @zh 全局的加载中图标，作用于所有组件。
   * @en Global loading icon.
   */
  loadingElement?: ReactNode;
  /**
   * @zh 全局配置组件内的空组件。
   * @en Empty component in component.
   * @version 2.10.0
   */
  renderEmpty?: (componentName?: string) => ReactNode;
  /**
   * @zh 全局配置弹出框的 `focusLock`，作用于 `Modal` `Drawer` 组件。
   * @en global `focusLock`, affects component `Modal` `Drawer`.
   * @defaultValue { modal: { autoFocus: true }, drawer: { autoFocus: true }}
   * @version 2.13.0
   */
  focusLock?: {
    modal?: boolean | { autoFocus?: boolean };
    drawer?: boolean | { autoFocus?: boolean };
  };
  zIndex?: number;
  children?: ReactNode;
}
