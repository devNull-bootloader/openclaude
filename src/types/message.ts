type AnyDict = Record<string, any>

export type MessageOrigin = 'user' | 'assistant' | 'system' | 'tool' | string
export type SystemMessageLevel = 'debug' | 'info' | 'warning' | 'error' | string
export type PartialCompactDirection = 'left' | 'right' | 'none' | string

export type CompactMetadata = AnyDict
export type RequestStartEvent = AnyDict
export type StopHookInfo = AnyDict
export type StreamEvent = AnyDict

export type Message = {
  type: string
  uuid?: string
  parentUuid?: string | null
  timestamp?: number
  message?: AnyDict
  [key: string]: any
}

export type UserMessage = Message & { type: 'user' }
export type AssistantMessage = Message & { type: 'assistant' }
export type AttachmentMessage = Message & { type: 'attachment' }
export type SystemMessage = Message & {
  type: 'system'
  level?: SystemMessageLevel
}

export type ProgressMessage<T = AnyDict> = Message & {
  type: 'progress'
  data?: T
  parentToolUseId?: string
}

export type NormalizedMessage = Message
export type NormalizedUserMessage = UserMessage
export type NormalizedAssistantMessage = AssistantMessage
export type RenderableMessage = Message
export type CollapsibleMessage = RenderableMessage

export type CollapsedReadSearchGroup = AnyDict
export type GroupedToolUseMessage = Message & { type: 'grouped_tool_use' }
export type HookResultMessage = Message & { type: 'hook_result' }
export type ToolUseSummaryMessage = Message & { type: 'tool_use_summary' }
export type TombstoneMessage = Message & { type: 'tombstone' }

export type SystemAPIErrorMessage = SystemMessage & { subtype?: 'api_error' }
export type SystemAgentsKilledMessage = SystemMessage & {
  subtype?: 'agents_killed'
}
export type SystemApiMetricsMessage = SystemMessage & { subtype?: 'api_metrics' }
export type SystemAwaySummaryMessage = SystemMessage & {
  subtype?: 'away_summary'
}
export type SystemBridgeStatusMessage = SystemMessage & {
  subtype?: 'bridge_status'
}
export type SystemCompactBoundaryMessage = SystemMessage & {
  subtype?: 'compact_boundary'
}
export type SystemFileSnapshotMessage = SystemMessage & {
  subtype?: 'file_snapshot'
}
export type SystemInformationalMessage = SystemMessage & {
  subtype?: 'informational'
}
export type SystemLocalCommandMessage = SystemMessage & {
  subtype?: 'local_command'
}
export type SystemMemorySavedMessage = SystemMessage & {
  subtype?: 'memory_saved'
}
export type SystemMicrocompactBoundaryMessage = SystemMessage & {
  subtype?: 'microcompact_boundary'
}
export type SystemPermissionRetryMessage = SystemMessage & {
  subtype?: 'permission_retry'
}
export type SystemScheduledTaskFireMessage = SystemMessage & {
  subtype?: 'scheduled_task_fire'
}
export type SystemStopHookSummaryMessage = SystemMessage & {
  subtype?: 'stop_hook_summary'
}
export type SystemThinkingMessage = SystemMessage & { subtype?: 'thinking' }
export type SystemTurnDurationMessage = SystemMessage & {
  subtype?: 'turn_duration'
}
