export interface IRenderingDesign {
  readonly id: string

  isArtboardLoaded(artboardId: string): boolean
  isArtboardReady(artboardId: string): boolean

  loadArtboard(
    artboardId: string,
    params: {
      octopusFilename: string
      symbolId?: string | null
    }
  ): Promise<{ ready: boolean; pendingSymbolIds: Array<string> }>
}
