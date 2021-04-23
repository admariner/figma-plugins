import { EventHandler } from '@create-figma-plugin/utilities'

import { Settings } from '../../utilities/types'

export type SmartRenameNodesProps = Pick<
  Settings,
  'smartRenameLayersWhitelist'
> & {
  hasSelection: boolean
}

export interface CloseUIHandler extends EventHandler {
  name: 'CLOSE_UI'
  handler: () => void
}
export interface SelectionChangedHandler extends EventHandler {
  name: 'SELECTION_CHANGED'
  handler: (hasSelection: boolean) => void
}
export interface SubmitHandler extends EventHandler {
  name: 'SUBMIT'
  handler: (
    smartRenameLayersWhitelist: Settings['smartRenameLayersWhitelist']
  ) => void
}
