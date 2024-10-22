import { PluginTemplateType } from '@fastgpt/global/core/plugin/type.d';
import { systemPluginResponseEnum } from '@fastgpt/global/core/workflow/runtime/constants';
import { SystemPluginTemplateItemType } from '@fastgpt/global/core/workflow/type';

export type SystemPluginResponseType = Promise<Record<string, any>>;
export type SystemPluginSpecialResponse = {
  type: 'SYSTEM_PLUGIN_FILE';
  path: string;
  contentType: string;
};

declare global {
  var systemPlugins: SystemPluginTemplateItemType[];
  var systemPluginCb: Record<string, (e: any) => SystemPluginResponseType>;
}
