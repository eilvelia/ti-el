// @flow

/// TL Builtin ///

type Type = any
type int = number
type long = string
type double = number
type boolFalse = false
type boolTrue = true
type int128 = (number | string)
type int256 = (number | string)
type bytes = number[]
type X = any

/// Constructors ///

export type resPQ = {
  _: 'resPQ',
  nonce: int128,
  server_nonce: int128,
  pq: string,
  server_public_key_fingerprints: Array<long>,
}

export type p_q_inner_data = {
  _: 'p_q_inner_data',
  pq: string,
  p: string,
  q: string,
  nonce: int128,
  server_nonce: int128,
  new_nonce: int256,
}

export type p_q_inner_data_dc = {
  _: 'p_q_inner_data_dc',
  pq: string,
  p: string,
  q: string,
  nonce: int128,
  server_nonce: int128,
  new_nonce: int256,
  dc: int,
}

export type p_q_inner_data_temp = {
  _: 'p_q_inner_data_temp',
  pq: string,
  p: string,
  q: string,
  nonce: int128,
  server_nonce: int128,
  new_nonce: int256,
  expires_in: int,
}

export type p_q_inner_data_temp_dc = {
  _: 'p_q_inner_data_temp_dc',
  pq: string,
  p: string,
  q: string,
  nonce: int128,
  server_nonce: int128,
  new_nonce: int256,
  dc: int,
  expires_in: int,
}

export type server_DH_params_fail = {
  _: 'server_DH_params_fail',
  nonce: int128,
  server_nonce: int128,
  new_nonce_hash: int128,
}

export type server_DH_params_ok = {
  _: 'server_DH_params_ok',
  nonce: int128,
  server_nonce: int128,
  encrypted_answer: string,
}

export type server_DH_inner_data = {
  _: 'server_DH_inner_data',
  nonce: int128,
  server_nonce: int128,
  g: int,
  dh_prime: string,
  g_a: string,
  server_time: int,
}

export type client_DH_inner_data = {
  _: 'client_DH_inner_data',
  nonce: int128,
  server_nonce: int128,
  retry_id: long,
  g_b: string,
}

export type dh_gen_ok = {
  _: 'dh_gen_ok',
  nonce: int128,
  server_nonce: int128,
  new_nonce_hash1: int128,
}

export type dh_gen_retry = {
  _: 'dh_gen_retry',
  nonce: int128,
  server_nonce: int128,
  new_nonce_hash2: int128,
}

export type dh_gen_fail = {
  _: 'dh_gen_fail',
  nonce: int128,
  server_nonce: int128,
  new_nonce_hash3: int128,
}

export type destroy_auth_key_ok = {
  _: 'destroy_auth_key_ok',
}

export type destroy_auth_key_none = {
  _: 'destroy_auth_key_none',
}

export type destroy_auth_key_fail = {
  _: 'destroy_auth_key_fail',
}

export type msgs_ack = {
  _: 'msgs_ack',
  msg_ids: Array<long>,
}

export type bad_msg_notification = {
  _: 'bad_msg_notification',
  bad_msg_id: long,
  bad_msg_seqno: int,
  error_code: int,
}

export type bad_server_salt = {
  _: 'bad_server_salt',
  bad_msg_id: long,
  bad_msg_seqno: int,
  error_code: int,
  new_server_salt: long,
}

export type msgs_state_req = {
  _: 'msgs_state_req',
  msg_ids: Array<long>,
}

export type msgs_state_info = {
  _: 'msgs_state_info',
  req_msg_id: long,
  info: string,
}

export type msgs_all_info = {
  _: 'msgs_all_info',
  msg_ids: Array<long>,
  info: string,
}

export type msg_detailed_info = {
  _: 'msg_detailed_info',
  msg_id: long,
  answer_msg_id: long,
  bytes: int,
  status: int,
}

export type msg_new_detailed_info = {
  _: 'msg_new_detailed_info',
  answer_msg_id: long,
  bytes: int,
  status: int,
}

export type msg_resend_req = {
  _: 'msg_resend_req',
  msg_ids: Array<long>,
}

export type rpc_error = {
  _: 'rpc_error',
  error_code: int,
  error_message: string,
}

export type rpc_answer_unknown = {
  _: 'rpc_answer_unknown',
}

export type rpc_answer_dropped_running = {
  _: 'rpc_answer_dropped_running',
}

export type rpc_answer_dropped = {
  _: 'rpc_answer_dropped',
  msg_id: long,
  seq_no: int,
  bytes: int,
}

export type future_salt = {
  _: 'future_salt',
  valid_since: int,
  valid_until: int,
  salt: long,
}

export type future_salts = {
  _: 'future_salts',
  req_msg_id: long,
  now: int,
  salts: Array<future_salt>,
}

export type pong = {
  _: 'pong',
  msg_id: long,
  ping_id: long,
}

export type destroy_session_ok = {
  _: 'destroy_session_ok',
  session_id: long,
}

export type destroy_session_none = {
  _: 'destroy_session_none',
  session_id: long,
}

export type new_session_created = {
  _: 'new_session_created',
  first_msg_id: long,
  unique_id: long,
  server_salt: long,
}

export type http_wait = {
  _: 'http_wait',
  max_delay: int,
  wait_after: int,
  max_wait: int,
}

export type ipPort = {
  _: 'ipPort',
  ipv4: int,
  port: int,
}

export type ipPortSecret = {
  _: 'ipPortSecret',
  ipv4: int,
  port: int,
  secret: bytes,
}

export type accessPointRule = {
  _: 'accessPointRule',
  phone_prefix_rules: string,
  dc_id: int,
  ips: Array<IpPort>,
}

export type help_configSimple = {
  _: 'help.configSimple',
  date: int,
  expires: int,
  rules: Array<AccessPointRule>,
}

export type error = {
  _: 'error',
  code: int,
  text: string,
}

export type inputPeerEmpty = {
  _: 'inputPeerEmpty',
}

export type inputPeerSelf = {
  _: 'inputPeerSelf',
}

export type inputPeerChat = {
  _: 'inputPeerChat',
  chat_id: int,
}

export type inputPeerUser = {
  _: 'inputPeerUser',
  user_id: int,
  access_hash: long,
}

export type inputPeerChannel = {
  _: 'inputPeerChannel',
  channel_id: int,
  access_hash: long,
}

export type inputUserEmpty = {
  _: 'inputUserEmpty',
}

export type inputUserSelf = {
  _: 'inputUserSelf',
}

export type inputUser = {
  _: 'inputUser',
  user_id: int,
  access_hash: long,
}

export type inputPhoneContact = {
  _: 'inputPhoneContact',
  client_id: long,
  phone: string,
  first_name: string,
  last_name: string,
}

export type inputFile = {
  _: 'inputFile',
  id: long,
  parts: int,
  name: string,
  md5_checksum: string,
}

export type inputFileBig = {
  _: 'inputFileBig',
  id: long,
  parts: int,
  name: string,
}

export type inputMediaEmpty = {
  _: 'inputMediaEmpty',
}

export type inputMediaUploadedPhoto = {
  _: 'inputMediaUploadedPhoto',
  flags: number,
  file: InputFile,
  stickers?: Array<InputDocument>,
  ttl_seconds?: int,
}

export type inputMediaPhoto = {
  _: 'inputMediaPhoto',
  flags: number,
  id: InputPhoto,
  ttl_seconds?: int,
}

export type inputMediaGeoPoint = {
  _: 'inputMediaGeoPoint',
  geo_point: InputGeoPoint,
}

export type inputMediaContact = {
  _: 'inputMediaContact',
  phone_number: string,
  first_name: string,
  last_name: string,
  vcard: string,
}

export type inputMediaUploadedDocument = {
  _: 'inputMediaUploadedDocument',
  flags: number,
  nosound_video?: true,
  file: InputFile,
  thumb?: InputFile,
  mime_type: string,
  attributes: Array<DocumentAttribute>,
  stickers?: Array<InputDocument>,
  ttl_seconds?: int,
}

export type inputMediaDocument = {
  _: 'inputMediaDocument',
  flags: number,
  id: InputDocument,
  ttl_seconds?: int,
}

export type inputMediaVenue = {
  _: 'inputMediaVenue',
  geo_point: InputGeoPoint,
  title: string,
  address: string,
  provider: string,
  venue_id: string,
  venue_type: string,
}

export type inputMediaGifExternal = {
  _: 'inputMediaGifExternal',
  url: string,
  q: string,
}

export type inputMediaPhotoExternal = {
  _: 'inputMediaPhotoExternal',
  flags: number,
  url: string,
  ttl_seconds?: int,
}

export type inputMediaDocumentExternal = {
  _: 'inputMediaDocumentExternal',
  flags: number,
  url: string,
  ttl_seconds?: int,
}

export type inputMediaGame = {
  _: 'inputMediaGame',
  id: InputGame,
}

export type inputMediaInvoice = {
  _: 'inputMediaInvoice',
  flags: number,
  title: string,
  description: string,
  photo?: InputWebDocument,
  invoice: Invoice,
  payload: bytes,
  provider: string,
  provider_data: DataJSON,
  start_param: string,
}

export type inputMediaGeoLive = {
  _: 'inputMediaGeoLive',
  geo_point: InputGeoPoint,
  period: int,
}

export type inputChatPhotoEmpty = {
  _: 'inputChatPhotoEmpty',
}

export type inputChatUploadedPhoto = {
  _: 'inputChatUploadedPhoto',
  file: InputFile,
}

export type inputChatPhoto = {
  _: 'inputChatPhoto',
  id: InputPhoto,
}

export type inputGeoPointEmpty = {
  _: 'inputGeoPointEmpty',
}

export type inputGeoPoint = {
  _: 'inputGeoPoint',
  lat: double,
  long: double,
}

export type inputPhotoEmpty = {
  _: 'inputPhotoEmpty',
}

export type inputPhoto = {
  _: 'inputPhoto',
  id: long,
  access_hash: long,
}

export type inputFileLocation = {
  _: 'inputFileLocation',
  volume_id: long,
  local_id: int,
  secret: long,
}

export type inputEncryptedFileLocation = {
  _: 'inputEncryptedFileLocation',
  id: long,
  access_hash: long,
}

export type inputDocumentFileLocation = {
  _: 'inputDocumentFileLocation',
  id: long,
  access_hash: long,
  version: int,
}

export type inputSecureFileLocation = {
  _: 'inputSecureFileLocation',
  id: long,
  access_hash: long,
}

export type inputTakeoutFileLocation = {
  _: 'inputTakeoutFileLocation',
}

export type inputAppEvent = {
  _: 'inputAppEvent',
  time: double,
  type: string,
  peer: long,
  data: string,
}

export type peerUser = {
  _: 'peerUser',
  user_id: int,
}

export type peerChat = {
  _: 'peerChat',
  chat_id: int,
}

export type peerChannel = {
  _: 'peerChannel',
  channel_id: int,
}

export type storage_fileUnknown = {
  _: 'storage.fileUnknown',
}

export type storage_filePartial = {
  _: 'storage.filePartial',
}

export type storage_fileJpeg = {
  _: 'storage.fileJpeg',
}

export type storage_fileGif = {
  _: 'storage.fileGif',
}

export type storage_filePng = {
  _: 'storage.filePng',
}

export type storage_filePdf = {
  _: 'storage.filePdf',
}

export type storage_fileMp3 = {
  _: 'storage.fileMp3',
}

export type storage_fileMov = {
  _: 'storage.fileMov',
}

export type storage_fileMp4 = {
  _: 'storage.fileMp4',
}

export type storage_fileWebp = {
  _: 'storage.fileWebp',
}

export type fileLocationUnavailable = {
  _: 'fileLocationUnavailable',
  volume_id: long,
  local_id: int,
  secret: long,
}

export type fileLocation = {
  _: 'fileLocation',
  dc_id: int,
  volume_id: long,
  local_id: int,
  secret: long,
}

export type userEmpty = {
  _: 'userEmpty',
  id: int,
}

export type user = {
  _: 'user',
  flags: number,
  self?: true,
  contact?: true,
  mutual_contact?: true,
  deleted?: true,
  bot?: true,
  bot_chat_history?: true,
  bot_nochats?: true,
  verified?: true,
  restricted?: true,
  min?: true,
  bot_inline_geo?: true,
  id: int,
  access_hash?: long,
  first_name?: string,
  last_name?: string,
  username?: string,
  phone?: string,
  photo?: UserProfilePhoto,
  status?: UserStatus,
  bot_info_version?: int,
  restriction_reason?: string,
  bot_inline_placeholder?: string,
  lang_code?: string,
}

export type userProfilePhotoEmpty = {
  _: 'userProfilePhotoEmpty',
}

export type userProfilePhoto = {
  _: 'userProfilePhoto',
  photo_id: long,
  photo_small: FileLocation,
  photo_big: FileLocation,
}

export type userStatusEmpty = {
  _: 'userStatusEmpty',
}

export type userStatusOnline = {
  _: 'userStatusOnline',
  expires: int,
}

export type userStatusOffline = {
  _: 'userStatusOffline',
  was_online: int,
}

export type userStatusRecently = {
  _: 'userStatusRecently',
}

export type userStatusLastWeek = {
  _: 'userStatusLastWeek',
}

export type userStatusLastMonth = {
  _: 'userStatusLastMonth',
}

export type chatEmpty = {
  _: 'chatEmpty',
  id: int,
}

export type chat = {
  _: 'chat',
  flags: number,
  creator?: true,
  kicked?: true,
  left?: true,
  admins_enabled?: true,
  admin?: true,
  deactivated?: true,
  id: int,
  title: string,
  photo: ChatPhoto,
  participants_count: int,
  date: int,
  version: int,
  migrated_to?: InputChannel,
}

export type chatForbidden = {
  _: 'chatForbidden',
  id: int,
  title: string,
}

export type channel = {
  _: 'channel',
  flags: number,
  creator?: true,
  left?: true,
  editor?: true,
  broadcast?: true,
  verified?: true,
  megagroup?: true,
  restricted?: true,
  democracy?: true,
  signatures?: true,
  min?: true,
  id: int,
  access_hash?: long,
  title: string,
  username?: string,
  photo: ChatPhoto,
  date: int,
  version: int,
  restriction_reason?: string,
  admin_rights?: ChannelAdminRights,
  banned_rights?: ChannelBannedRights,
  participants_count?: int,
}

export type channelForbidden = {
  _: 'channelForbidden',
  flags: number,
  broadcast?: true,
  megagroup?: true,
  id: int,
  access_hash: long,
  title: string,
  until_date?: int,
}

export type chatFull = {
  _: 'chatFull',
  id: int,
  participants: ChatParticipants,
  chat_photo: Photo,
  notify_settings: PeerNotifySettings,
  exported_invite: ExportedChatInvite,
  bot_info: Array<BotInfo>,
}

export type channelFull = {
  _: 'channelFull',
  flags: number,
  can_view_participants?: true,
  can_set_username?: true,
  can_set_stickers?: true,
  hidden_prehistory?: true,
  id: int,
  about: string,
  participants_count?: int,
  admins_count?: int,
  kicked_count?: int,
  banned_count?: int,
  read_inbox_max_id: int,
  read_outbox_max_id: int,
  unread_count: int,
  chat_photo: Photo,
  notify_settings: PeerNotifySettings,
  exported_invite: ExportedChatInvite,
  bot_info: Array<BotInfo>,
  migrated_from_chat_id?: int,
  migrated_from_max_id?: int,
  pinned_msg_id?: int,
  stickerset?: StickerSet,
  available_min_id?: int,
}

export type chatParticipant = {
  _: 'chatParticipant',
  user_id: int,
  inviter_id: int,
  date: int,
}

export type chatParticipantCreator = {
  _: 'chatParticipantCreator',
  user_id: int,
}

export type chatParticipantAdmin = {
  _: 'chatParticipantAdmin',
  user_id: int,
  inviter_id: int,
  date: int,
}

export type chatParticipantsForbidden = {
  _: 'chatParticipantsForbidden',
  flags: number,
  chat_id: int,
  self_participant?: ChatParticipant,
}

export type chatParticipants = {
  _: 'chatParticipants',
  chat_id: int,
  participants: Array<ChatParticipant>,
  version: int,
}

export type chatPhotoEmpty = {
  _: 'chatPhotoEmpty',
}

export type chatPhoto = {
  _: 'chatPhoto',
  photo_small: FileLocation,
  photo_big: FileLocation,
}

export type messageEmpty = {
  _: 'messageEmpty',
  id: int,
}

export type message = {
  _: 'message',
  flags: number,
  out?: true,
  mentioned?: true,
  media_unread?: true,
  silent?: true,
  post?: true,
  id: int,
  from_id?: int,
  to_id: Peer,
  fwd_from?: MessageFwdHeader,
  via_bot_id?: int,
  reply_to_msg_id?: int,
  date: int,
  message: string,
  media?: MessageMedia,
  reply_markup?: ReplyMarkup,
  entities?: Array<MessageEntity>,
  views?: int,
  edit_date?: int,
  post_author?: string,
  grouped_id?: long,
}

export type messageService = {
  _: 'messageService',
  flags: number,
  out?: true,
  mentioned?: true,
  media_unread?: true,
  silent?: true,
  post?: true,
  id: int,
  from_id?: int,
  to_id: Peer,
  reply_to_msg_id?: int,
  date: int,
  action: MessageAction,
}

export type messageMediaEmpty = {
  _: 'messageMediaEmpty',
}

export type messageMediaPhoto = {
  _: 'messageMediaPhoto',
  flags: number,
  photo?: Photo,
  ttl_seconds?: int,
}

export type messageMediaGeo = {
  _: 'messageMediaGeo',
  geo: GeoPoint,
}

export type messageMediaContact = {
  _: 'messageMediaContact',
  phone_number: string,
  first_name: string,
  last_name: string,
  vcard: string,
  user_id: int,
}

export type messageMediaUnsupported = {
  _: 'messageMediaUnsupported',
}

export type messageMediaDocument = {
  _: 'messageMediaDocument',
  flags: number,
  document?: Document,
  ttl_seconds?: int,
}

export type messageMediaWebPage = {
  _: 'messageMediaWebPage',
  webpage: WebPage,
}

export type messageMediaVenue = {
  _: 'messageMediaVenue',
  geo: GeoPoint,
  title: string,
  address: string,
  provider: string,
  venue_id: string,
  venue_type: string,
}

export type messageMediaGame = {
  _: 'messageMediaGame',
  game: Game,
}

export type messageMediaInvoice = {
  _: 'messageMediaInvoice',
  flags: number,
  shipping_address_requested?: true,
  test?: true,
  title: string,
  description: string,
  photo?: WebDocument,
  receipt_msg_id?: int,
  currency: string,
  total_amount: long,
  start_param: string,
}

export type messageMediaGeoLive = {
  _: 'messageMediaGeoLive',
  geo: GeoPoint,
  period: int,
}

export type messageActionEmpty = {
  _: 'messageActionEmpty',
}

export type messageActionChatCreate = {
  _: 'messageActionChatCreate',
  title: string,
  users: Array<int>,
}

export type messageActionChatEditTitle = {
  _: 'messageActionChatEditTitle',
  title: string,
}

export type messageActionChatEditPhoto = {
  _: 'messageActionChatEditPhoto',
  photo: Photo,
}

export type messageActionChatDeletePhoto = {
  _: 'messageActionChatDeletePhoto',
}

export type messageActionChatAddUser = {
  _: 'messageActionChatAddUser',
  users: Array<int>,
}

export type messageActionChatDeleteUser = {
  _: 'messageActionChatDeleteUser',
  user_id: int,
}

export type messageActionChatJoinedByLink = {
  _: 'messageActionChatJoinedByLink',
  inviter_id: int,
}

export type messageActionChannelCreate = {
  _: 'messageActionChannelCreate',
  title: string,
}

export type messageActionChatMigrateTo = {
  _: 'messageActionChatMigrateTo',
  channel_id: int,
}

export type messageActionChannelMigrateFrom = {
  _: 'messageActionChannelMigrateFrom',
  title: string,
  chat_id: int,
}

export type messageActionPinMessage = {
  _: 'messageActionPinMessage',
}

export type messageActionHistoryClear = {
  _: 'messageActionHistoryClear',
}

export type messageActionGameScore = {
  _: 'messageActionGameScore',
  game_id: long,
  score: int,
}

export type messageActionPaymentSentMe = {
  _: 'messageActionPaymentSentMe',
  flags: number,
  currency: string,
  total_amount: long,
  payload: bytes,
  info?: PaymentRequestedInfo,
  shipping_option_id?: string,
  charge: PaymentCharge,
}

export type messageActionPaymentSent = {
  _: 'messageActionPaymentSent',
  currency: string,
  total_amount: long,
}

export type messageActionPhoneCall = {
  _: 'messageActionPhoneCall',
  flags: number,
  call_id: long,
  reason?: PhoneCallDiscardReason,
  duration?: int,
}

export type messageActionScreenshotTaken = {
  _: 'messageActionScreenshotTaken',
}

export type messageActionCustomAction = {
  _: 'messageActionCustomAction',
  message: string,
}

export type messageActionBotAllowed = {
  _: 'messageActionBotAllowed',
  domain: string,
}

export type messageActionSecureValuesSentMe = {
  _: 'messageActionSecureValuesSentMe',
  values: Array<SecureValue>,
  credentials: SecureCredentialsEncrypted,
}

export type messageActionSecureValuesSent = {
  _: 'messageActionSecureValuesSent',
  types: Array<SecureValueType>,
}

export type dialog = {
  _: 'dialog',
  flags: number,
  pinned?: true,
  unread_mark?: true,
  peer: Peer,
  top_message: int,
  read_inbox_max_id: int,
  read_outbox_max_id: int,
  unread_count: int,
  unread_mentions_count: int,
  notify_settings: PeerNotifySettings,
  pts?: int,
  draft?: DraftMessage,
}

export type photoEmpty = {
  _: 'photoEmpty',
  id: long,
}

export type photo = {
  _: 'photo',
  flags: number,
  has_stickers?: true,
  id: long,
  access_hash: long,
  date: int,
  sizes: Array<PhotoSize>,
}

export type photoSizeEmpty = {
  _: 'photoSizeEmpty',
  type: string,
}

export type photoSize = {
  _: 'photoSize',
  type: string,
  location: FileLocation,
  w: int,
  h: int,
  size: int,
}

export type photoCachedSize = {
  _: 'photoCachedSize',
  type: string,
  location: FileLocation,
  w: int,
  h: int,
  bytes: bytes,
}

export type geoPointEmpty = {
  _: 'geoPointEmpty',
}

export type geoPoint = {
  _: 'geoPoint',
  long: double,
  lat: double,
  access_hash: long,
}

export type auth_checkedPhone = {
  _: 'auth.checkedPhone',
  phone_registered: Bool,
}

export type auth_sentCode = {
  _: 'auth.sentCode',
  flags: number,
  phone_registered?: true,
  type: auth_SentCodeType,
  phone_code_hash: string,
  next_type?: auth_CodeType,
  timeout?: int,
  terms_of_service?: help_TermsOfService,
}

export type auth_authorization = {
  _: 'auth.authorization',
  flags: number,
  tmp_sessions?: int,
  user: User,
}

export type auth_exportedAuthorization = {
  _: 'auth.exportedAuthorization',
  id: int,
  bytes: bytes,
}

export type inputNotifyPeer = {
  _: 'inputNotifyPeer',
  peer: InputPeer,
}

export type inputNotifyUsers = {
  _: 'inputNotifyUsers',
}

export type inputNotifyChats = {
  _: 'inputNotifyChats',
}

export type inputPeerNotifySettings = {
  _: 'inputPeerNotifySettings',
  flags: number,
  show_previews?: Bool,
  silent?: Bool,
  mute_until?: int,
  sound?: string,
}

export type peerNotifySettings = {
  _: 'peerNotifySettings',
  flags: number,
  show_previews?: Bool,
  silent?: Bool,
  mute_until?: int,
  sound?: string,
}

export type peerSettings = {
  _: 'peerSettings',
  flags: number,
  report_spam?: true,
}

export type wallPaper = {
  _: 'wallPaper',
  id: int,
  title: string,
  sizes: Array<PhotoSize>,
  color: int,
}

export type wallPaperSolid = {
  _: 'wallPaperSolid',
  id: int,
  title: string,
  bg_color: int,
  color: int,
}

export type inputReportReasonSpam = {
  _: 'inputReportReasonSpam',
}

export type inputReportReasonViolence = {
  _: 'inputReportReasonViolence',
}

export type inputReportReasonPornography = {
  _: 'inputReportReasonPornography',
}

export type inputReportReasonOther = {
  _: 'inputReportReasonOther',
  text: string,
}

export type userFull = {
  _: 'userFull',
  flags: number,
  blocked?: true,
  phone_calls_available?: true,
  phone_calls_private?: true,
  user: User,
  about?: string,
  link: contacts_Link,
  profile_photo?: Photo,
  notify_settings: PeerNotifySettings,
  bot_info?: BotInfo,
  common_chats_count: int,
}

export type contact = {
  _: 'contact',
  user_id: int,
  mutual: Bool,
}

export type importedContact = {
  _: 'importedContact',
  user_id: int,
  client_id: long,
}

export type contactBlocked = {
  _: 'contactBlocked',
  user_id: int,
  date: int,
}

export type contactStatus = {
  _: 'contactStatus',
  user_id: int,
  status: UserStatus,
}

export type contacts_link = {
  _: 'contacts.link',
  my_link: ContactLink,
  foreign_link: ContactLink,
  user: User,
}

export type contacts_contactsNotModified = {
  _: 'contacts.contactsNotModified',
}

export type contacts_contacts = {
  _: 'contacts.contacts',
  contacts: Array<Contact>,
  saved_count: int,
  users: Array<User>,
}

export type contacts_importedContacts = {
  _: 'contacts.importedContacts',
  imported: Array<ImportedContact>,
  popular_invites: Array<PopularContact>,
  retry_contacts: Array<long>,
  users: Array<User>,
}

export type contacts_blocked = {
  _: 'contacts.blocked',
  blocked: Array<ContactBlocked>,
  users: Array<User>,
}

export type contacts_blockedSlice = {
  _: 'contacts.blockedSlice',
  count: int,
  blocked: Array<ContactBlocked>,
  users: Array<User>,
}

export type messages_dialogs = {
  _: 'messages.dialogs',
  dialogs: Array<Dialog>,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_dialogsSlice = {
  _: 'messages.dialogsSlice',
  count: int,
  dialogs: Array<Dialog>,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_dialogsNotModified = {
  _: 'messages.dialogsNotModified',
  count: int,
}

export type messages_messages = {
  _: 'messages.messages',
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_messagesSlice = {
  _: 'messages.messagesSlice',
  count: int,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_channelMessages = {
  _: 'messages.channelMessages',
  flags: number,
  pts: int,
  count: int,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_messagesNotModified = {
  _: 'messages.messagesNotModified',
  count: int,
}

export type messages_chats = {
  _: 'messages.chats',
  chats: Array<Chat>,
}

export type messages_chatsSlice = {
  _: 'messages.chatsSlice',
  count: int,
  chats: Array<Chat>,
}

export type messages_chatFull = {
  _: 'messages.chatFull',
  full_chat: ChatFull,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messages_affectedHistory = {
  _: 'messages.affectedHistory',
  pts: int,
  pts_count: int,
  offset: int,
}

export type inputMessagesFilterEmpty = {
  _: 'inputMessagesFilterEmpty',
}

export type inputMessagesFilterPhotos = {
  _: 'inputMessagesFilterPhotos',
}

export type inputMessagesFilterVideo = {
  _: 'inputMessagesFilterVideo',
}

export type inputMessagesFilterPhotoVideo = {
  _: 'inputMessagesFilterPhotoVideo',
}

export type inputMessagesFilterDocument = {
  _: 'inputMessagesFilterDocument',
}

export type inputMessagesFilterUrl = {
  _: 'inputMessagesFilterUrl',
}

export type inputMessagesFilterGif = {
  _: 'inputMessagesFilterGif',
}

export type inputMessagesFilterVoice = {
  _: 'inputMessagesFilterVoice',
}

export type inputMessagesFilterMusic = {
  _: 'inputMessagesFilterMusic',
}

export type inputMessagesFilterChatPhotos = {
  _: 'inputMessagesFilterChatPhotos',
}

export type inputMessagesFilterPhoneCalls = {
  _: 'inputMessagesFilterPhoneCalls',
  flags: number,
  missed?: true,
}

export type inputMessagesFilterRoundVoice = {
  _: 'inputMessagesFilterRoundVoice',
}

export type inputMessagesFilterRoundVideo = {
  _: 'inputMessagesFilterRoundVideo',
}

export type inputMessagesFilterMyMentions = {
  _: 'inputMessagesFilterMyMentions',
}

export type inputMessagesFilterGeo = {
  _: 'inputMessagesFilterGeo',
}

export type inputMessagesFilterContacts = {
  _: 'inputMessagesFilterContacts',
}

export type updateNewMessage = {
  _: 'updateNewMessage',
  message: Message,
  pts: int,
  pts_count: int,
}

export type updateMessageID = {
  _: 'updateMessageID',
  id: int,
  random_id: long,
}

export type updateDeleteMessages = {
  _: 'updateDeleteMessages',
  messages: Array<int>,
  pts: int,
  pts_count: int,
}

export type updateUserTyping = {
  _: 'updateUserTyping',
  user_id: int,
  action: SendMessageAction,
}

export type updateChatUserTyping = {
  _: 'updateChatUserTyping',
  chat_id: int,
  user_id: int,
  action: SendMessageAction,
}

export type updateChatParticipants = {
  _: 'updateChatParticipants',
  participants: ChatParticipants,
}

export type updateUserStatus = {
  _: 'updateUserStatus',
  user_id: int,
  status: UserStatus,
}

export type updateUserName = {
  _: 'updateUserName',
  user_id: int,
  first_name: string,
  last_name: string,
  username: string,
}

export type updateUserPhoto = {
  _: 'updateUserPhoto',
  user_id: int,
  date: int,
  photo: UserProfilePhoto,
  previous: Bool,
}

export type updateContactRegistered = {
  _: 'updateContactRegistered',
  user_id: int,
  date: int,
}

export type updateContactLink = {
  _: 'updateContactLink',
  user_id: int,
  my_link: ContactLink,
  foreign_link: ContactLink,
}

export type updateNewEncryptedMessage = {
  _: 'updateNewEncryptedMessage',
  message: EncryptedMessage,
  qts: int,
}

export type updateEncryptedChatTyping = {
  _: 'updateEncryptedChatTyping',
  chat_id: int,
}

export type updateEncryption = {
  _: 'updateEncryption',
  chat: EncryptedChat,
  date: int,
}

export type updateEncryptedMessagesRead = {
  _: 'updateEncryptedMessagesRead',
  chat_id: int,
  max_date: int,
  date: int,
}

export type updateChatParticipantAdd = {
  _: 'updateChatParticipantAdd',
  chat_id: int,
  user_id: int,
  inviter_id: int,
  date: int,
  version: int,
}

export type updateChatParticipantDelete = {
  _: 'updateChatParticipantDelete',
  chat_id: int,
  user_id: int,
  version: int,
}

export type updateDcOptions = {
  _: 'updateDcOptions',
  dc_options: Array<DcOption>,
}

export type updateUserBlocked = {
  _: 'updateUserBlocked',
  user_id: int,
  blocked: Bool,
}

export type updateNotifySettings = {
  _: 'updateNotifySettings',
  peer: NotifyPeer,
  notify_settings: PeerNotifySettings,
}

export type updateServiceNotification = {
  _: 'updateServiceNotification',
  flags: number,
  popup?: true,
  inbox_date?: int,
  type: string,
  message: string,
  media: MessageMedia,
  entities: Array<MessageEntity>,
}

export type updatePrivacy = {
  _: 'updatePrivacy',
  key: PrivacyKey,
  rules: Array<PrivacyRule>,
}

export type updateUserPhone = {
  _: 'updateUserPhone',
  user_id: int,
  phone: string,
}

export type updateReadHistoryInbox = {
  _: 'updateReadHistoryInbox',
  peer: Peer,
  max_id: int,
  pts: int,
  pts_count: int,
}

export type updateReadHistoryOutbox = {
  _: 'updateReadHistoryOutbox',
  peer: Peer,
  max_id: int,
  pts: int,
  pts_count: int,
}

export type updateWebPage = {
  _: 'updateWebPage',
  webpage: WebPage,
  pts: int,
  pts_count: int,
}

export type updateReadMessagesContents = {
  _: 'updateReadMessagesContents',
  messages: Array<int>,
  pts: int,
  pts_count: int,
}

export type updateChannelTooLong = {
  _: 'updateChannelTooLong',
  flags: number,
  channel_id: int,
  pts?: int,
}

export type updateChannel = {
  _: 'updateChannel',
  channel_id: int,
}

export type updateNewChannelMessage = {
  _: 'updateNewChannelMessage',
  message: Message,
  pts: int,
  pts_count: int,
}

export type updateReadChannelInbox = {
  _: 'updateReadChannelInbox',
  channel_id: int,
  max_id: int,
}

export type updateDeleteChannelMessages = {
  _: 'updateDeleteChannelMessages',
  channel_id: int,
  messages: Array<int>,
  pts: int,
  pts_count: int,
}

export type updateChannelMessageViews = {
  _: 'updateChannelMessageViews',
  channel_id: int,
  id: int,
  views: int,
}

export type updateChatAdmins = {
  _: 'updateChatAdmins',
  chat_id: int,
  enabled: Bool,
  version: int,
}

export type updateChatParticipantAdmin = {
  _: 'updateChatParticipantAdmin',
  chat_id: int,
  user_id: int,
  is_admin: Bool,
  version: int,
}

export type updateNewStickerSet = {
  _: 'updateNewStickerSet',
  stickerset: messages_StickerSet,
}

export type updateStickerSetsOrder = {
  _: 'updateStickerSetsOrder',
  flags: number,
  masks?: true,
  order: Array<long>,
}

export type updateStickerSets = {
  _: 'updateStickerSets',
}

export type updateSavedGifs = {
  _: 'updateSavedGifs',
}

export type updateBotInlineQuery = {
  _: 'updateBotInlineQuery',
  flags: number,
  query_id: long,
  user_id: int,
  query: string,
  geo?: GeoPoint,
  offset: string,
}

export type updateBotInlineSend = {
  _: 'updateBotInlineSend',
  flags: number,
  user_id: int,
  query: string,
  geo?: GeoPoint,
  id: string,
  msg_id?: InputBotInlineMessageID,
}

export type updateEditChannelMessage = {
  _: 'updateEditChannelMessage',
  message: Message,
  pts: int,
  pts_count: int,
}

export type updateChannelPinnedMessage = {
  _: 'updateChannelPinnedMessage',
  channel_id: int,
  id: int,
}

export type updateBotCallbackQuery = {
  _: 'updateBotCallbackQuery',
  flags: number,
  query_id: long,
  user_id: int,
  peer: Peer,
  msg_id: int,
  chat_instance: long,
  data?: bytes,
  game_short_name?: string,
}

export type updateEditMessage = {
  _: 'updateEditMessage',
  message: Message,
  pts: int,
  pts_count: int,
}

export type updateInlineBotCallbackQuery = {
  _: 'updateInlineBotCallbackQuery',
  flags: number,
  query_id: long,
  user_id: int,
  msg_id: InputBotInlineMessageID,
  chat_instance: long,
  data?: bytes,
  game_short_name?: string,
}

export type updateReadChannelOutbox = {
  _: 'updateReadChannelOutbox',
  channel_id: int,
  max_id: int,
}

export type updateDraftMessage = {
  _: 'updateDraftMessage',
  peer: Peer,
  draft: DraftMessage,
}

export type updateReadFeaturedStickers = {
  _: 'updateReadFeaturedStickers',
}

export type updateRecentStickers = {
  _: 'updateRecentStickers',
}

export type updateConfig = {
  _: 'updateConfig',
}

export type updatePtsChanged = {
  _: 'updatePtsChanged',
}

export type updateChannelWebPage = {
  _: 'updateChannelWebPage',
  channel_id: int,
  webpage: WebPage,
  pts: int,
  pts_count: int,
}

export type updateDialogPinned = {
  _: 'updateDialogPinned',
  flags: number,
  pinned?: true,
  peer: DialogPeer,
}

export type updatePinnedDialogs = {
  _: 'updatePinnedDialogs',
  flags: number,
  order?: Array<DialogPeer>,
}

export type updateBotWebhookJSON = {
  _: 'updateBotWebhookJSON',
  data: DataJSON,
}

export type updateBotWebhookJSONQuery = {
  _: 'updateBotWebhookJSONQuery',
  query_id: long,
  data: DataJSON,
  timeout: int,
}

export type updateBotShippingQuery = {
  _: 'updateBotShippingQuery',
  query_id: long,
  user_id: int,
  payload: bytes,
  shipping_address: PostAddress,
}

export type updateBotPrecheckoutQuery = {
  _: 'updateBotPrecheckoutQuery',
  flags: number,
  query_id: long,
  user_id: int,
  payload: bytes,
  info?: PaymentRequestedInfo,
  shipping_option_id?: string,
  currency: string,
  total_amount: long,
}

export type updatePhoneCall = {
  _: 'updatePhoneCall',
  phone_call: PhoneCall,
}

export type updateLangPackTooLong = {
  _: 'updateLangPackTooLong',
}

export type updateLangPack = {
  _: 'updateLangPack',
  difference: LangPackDifference,
}

export type updateFavedStickers = {
  _: 'updateFavedStickers',
}

export type updateChannelReadMessagesContents = {
  _: 'updateChannelReadMessagesContents',
  channel_id: int,
  messages: Array<int>,
}

export type updateContactsReset = {
  _: 'updateContactsReset',
}

export type updateChannelAvailableMessages = {
  _: 'updateChannelAvailableMessages',
  channel_id: int,
  available_min_id: int,
}

export type updateDialogUnreadMark = {
  _: 'updateDialogUnreadMark',
  flags: number,
  unread?: true,
  peer: DialogPeer,
}

export type updates_state = {
  _: 'updates.state',
  pts: int,
  qts: int,
  date: int,
  seq: int,
  unread_count: int,
}

export type updates_differenceEmpty = {
  _: 'updates.differenceEmpty',
  date: int,
  seq: int,
}

export type updates_difference = {
  _: 'updates.difference',
  new_messages: Array<Message>,
  new_encrypted_messages: Array<EncryptedMessage>,
  other_updates: Array<Update>,
  chats: Array<Chat>,
  users: Array<User>,
  state: updates_State,
}

export type updates_differenceSlice = {
  _: 'updates.differenceSlice',
  new_messages: Array<Message>,
  new_encrypted_messages: Array<EncryptedMessage>,
  other_updates: Array<Update>,
  chats: Array<Chat>,
  users: Array<User>,
  intermediate_state: updates_State,
}

export type updates_differenceTooLong = {
  _: 'updates.differenceTooLong',
  pts: int,
}

export type updatesTooLong = {
  _: 'updatesTooLong',
}

export type updateShortMessage = {
  _: 'updateShortMessage',
  flags: number,
  out?: true,
  mentioned?: true,
  media_unread?: true,
  silent?: true,
  id: int,
  user_id: int,
  message: string,
  pts: int,
  pts_count: int,
  date: int,
  fwd_from?: MessageFwdHeader,
  via_bot_id?: int,
  reply_to_msg_id?: int,
  entities?: Array<MessageEntity>,
}

export type updateShortChatMessage = {
  _: 'updateShortChatMessage',
  flags: number,
  out?: true,
  mentioned?: true,
  media_unread?: true,
  silent?: true,
  id: int,
  from_id: int,
  chat_id: int,
  message: string,
  pts: int,
  pts_count: int,
  date: int,
  fwd_from?: MessageFwdHeader,
  via_bot_id?: int,
  reply_to_msg_id?: int,
  entities?: Array<MessageEntity>,
}

export type updateShort = {
  _: 'updateShort',
  update: Update,
  date: int,
}

export type updatesCombined = {
  _: 'updatesCombined',
  updates: Array<Update>,
  users: Array<User>,
  chats: Array<Chat>,
  date: int,
  seq_start: int,
  seq: int,
}

export type updates = {
  _: 'updates',
  updates: Array<Update>,
  users: Array<User>,
  chats: Array<Chat>,
  date: int,
  seq: int,
}

export type updateShortSentMessage = {
  _: 'updateShortSentMessage',
  flags: number,
  out?: true,
  id: int,
  pts: int,
  pts_count: int,
  date: int,
  media?: MessageMedia,
  entities?: Array<MessageEntity>,
}

export type photos_photos = {
  _: 'photos.photos',
  photos: Array<Photo>,
  users: Array<User>,
}

export type photos_photosSlice = {
  _: 'photos.photosSlice',
  count: int,
  photos: Array<Photo>,
  users: Array<User>,
}

export type photos_photo = {
  _: 'photos.photo',
  photo: Photo,
  users: Array<User>,
}

export type upload_file = {
  _: 'upload.file',
  type: storage_FileType,
  mtime: int,
  bytes: bytes,
}

export type upload_fileCdnRedirect = {
  _: 'upload.fileCdnRedirect',
  dc_id: int,
  file_token: bytes,
  encryption_key: bytes,
  encryption_iv: bytes,
  file_hashes: Array<FileHash>,
}

export type dcOption = {
  _: 'dcOption',
  flags: number,
  ipv6?: true,
  media_only?: true,
  tcpo_only?: true,
  cdn?: true,
  static?: true,
  id: int,
  ip_address: string,
  port: int,
  secret?: bytes,
}

export type config = {
  _: 'config',
  flags: number,
  phonecalls_enabled?: true,
  default_p2p_contacts?: true,
  preload_featured_stickers?: true,
  ignore_phone_entities?: true,
  revoke_pm_inbox?: true,
  blocked_mode?: true,
  date: int,
  expires: int,
  test_mode: Bool,
  this_dc: int,
  dc_options: Array<DcOption>,
  dc_txt_domain_name: string,
  chat_size_max: int,
  megagroup_size_max: int,
  forwarded_count_max: int,
  online_update_period_ms: int,
  offline_blur_timeout_ms: int,
  offline_idle_timeout_ms: int,
  online_cloud_timeout_ms: int,
  notify_cloud_delay_ms: int,
  notify_default_delay_ms: int,
  push_chat_period_ms: int,
  push_chat_limit: int,
  saved_gifs_limit: int,
  edit_time_limit: int,
  revoke_time_limit: int,
  revoke_pm_time_limit: int,
  rating_e_decay: int,
  stickers_recent_limit: int,
  stickers_faved_limit: int,
  channels_read_media_period: int,
  tmp_sessions?: int,
  pinned_dialogs_count_max: int,
  call_receive_timeout_ms: int,
  call_ring_timeout_ms: int,
  call_connect_timeout_ms: int,
  call_packet_timeout_ms: int,
  me_url_prefix: string,
  autoupdate_url_prefix?: string,
  gif_search_username?: string,
  venue_search_username?: string,
  img_search_username?: string,
  static_maps_provider?: string,
  caption_length_max: int,
  message_length_max: int,
  webfile_dc_id: int,
  suggested_lang_code?: string,
  lang_pack_version?: int,
}

export type nearestDc = {
  _: 'nearestDc',
  country: string,
  this_dc: int,
  nearest_dc: int,
}

export type help_appUpdate = {
  _: 'help.appUpdate',
  id: int,
  critical: Bool,
  url: string,
  text: string,
}

export type help_noAppUpdate = {
  _: 'help.noAppUpdate',
}

export type help_inviteText = {
  _: 'help.inviteText',
  message: string,
}

export type encryptedChatEmpty = {
  _: 'encryptedChatEmpty',
  id: int,
}

export type encryptedChatWaiting = {
  _: 'encryptedChatWaiting',
  id: int,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
}

export type encryptedChatRequested = {
  _: 'encryptedChatRequested',
  id: int,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  g_a: bytes,
}

export type encryptedChat = {
  _: 'encryptedChat',
  id: int,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  g_a_or_b: bytes,
  key_fingerprint: long,
}

export type encryptedChatDiscarded = {
  _: 'encryptedChatDiscarded',
  id: int,
}

export type inputEncryptedChat = {
  _: 'inputEncryptedChat',
  chat_id: int,
  access_hash: long,
}

export type encryptedFileEmpty = {
  _: 'encryptedFileEmpty',
}

export type encryptedFile = {
  _: 'encryptedFile',
  id: long,
  access_hash: long,
  size: int,
  dc_id: int,
  key_fingerprint: int,
}

export type inputEncryptedFileEmpty = {
  _: 'inputEncryptedFileEmpty',
}

export type inputEncryptedFileUploaded = {
  _: 'inputEncryptedFileUploaded',
  id: long,
  parts: int,
  md5_checksum: string,
  key_fingerprint: int,
}

export type inputEncryptedFile = {
  _: 'inputEncryptedFile',
  id: long,
  access_hash: long,
}

export type inputEncryptedFileBigUploaded = {
  _: 'inputEncryptedFileBigUploaded',
  id: long,
  parts: int,
  key_fingerprint: int,
}

export type encryptedMessage = {
  _: 'encryptedMessage',
  random_id: long,
  chat_id: int,
  date: int,
  bytes: bytes,
  file: EncryptedFile,
}

export type encryptedMessageService = {
  _: 'encryptedMessageService',
  random_id: long,
  chat_id: int,
  date: int,
  bytes: bytes,
}

export type messages_dhConfigNotModified = {
  _: 'messages.dhConfigNotModified',
  random: bytes,
}

export type messages_dhConfig = {
  _: 'messages.dhConfig',
  g: int,
  p: bytes,
  version: int,
  random: bytes,
}

export type messages_sentEncryptedMessage = {
  _: 'messages.sentEncryptedMessage',
  date: int,
}

export type messages_sentEncryptedFile = {
  _: 'messages.sentEncryptedFile',
  date: int,
  file: EncryptedFile,
}

export type inputDocumentEmpty = {
  _: 'inputDocumentEmpty',
}

export type inputDocument = {
  _: 'inputDocument',
  id: long,
  access_hash: long,
}

export type documentEmpty = {
  _: 'documentEmpty',
  id: long,
}

export type document = {
  _: 'document',
  id: long,
  access_hash: long,
  date: int,
  mime_type: string,
  size: int,
  thumb: PhotoSize,
  dc_id: int,
  version: int,
  attributes: Array<DocumentAttribute>,
}

export type help_support = {
  _: 'help.support',
  phone_number: string,
  user: User,
}

export type notifyPeer = {
  _: 'notifyPeer',
  peer: Peer,
}

export type notifyUsers = {
  _: 'notifyUsers',
}

export type notifyChats = {
  _: 'notifyChats',
}

export type sendMessageTypingAction = {
  _: 'sendMessageTypingAction',
}

export type sendMessageCancelAction = {
  _: 'sendMessageCancelAction',
}

export type sendMessageRecordVideoAction = {
  _: 'sendMessageRecordVideoAction',
}

export type sendMessageUploadVideoAction = {
  _: 'sendMessageUploadVideoAction',
  progress: int,
}

export type sendMessageRecordAudioAction = {
  _: 'sendMessageRecordAudioAction',
}

export type sendMessageUploadAudioAction = {
  _: 'sendMessageUploadAudioAction',
  progress: int,
}

export type sendMessageUploadPhotoAction = {
  _: 'sendMessageUploadPhotoAction',
  progress: int,
}

export type sendMessageUploadDocumentAction = {
  _: 'sendMessageUploadDocumentAction',
  progress: int,
}

export type sendMessageGeoLocationAction = {
  _: 'sendMessageGeoLocationAction',
}

export type sendMessageChooseContactAction = {
  _: 'sendMessageChooseContactAction',
}

export type sendMessageGamePlayAction = {
  _: 'sendMessageGamePlayAction',
}

export type sendMessageRecordRoundAction = {
  _: 'sendMessageRecordRoundAction',
}

export type sendMessageUploadRoundAction = {
  _: 'sendMessageUploadRoundAction',
  progress: int,
}

export type contacts_found = {
  _: 'contacts.found',
  my_results: Array<Peer>,
  results: Array<Peer>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type inputPrivacyKeyStatusTimestamp = {
  _: 'inputPrivacyKeyStatusTimestamp',
}

export type inputPrivacyKeyChatInvite = {
  _: 'inputPrivacyKeyChatInvite',
}

export type inputPrivacyKeyPhoneCall = {
  _: 'inputPrivacyKeyPhoneCall',
}

export type privacyKeyStatusTimestamp = {
  _: 'privacyKeyStatusTimestamp',
}

export type privacyKeyChatInvite = {
  _: 'privacyKeyChatInvite',
}

export type privacyKeyPhoneCall = {
  _: 'privacyKeyPhoneCall',
}

export type inputPrivacyValueAllowContacts = {
  _: 'inputPrivacyValueAllowContacts',
}

export type inputPrivacyValueAllowAll = {
  _: 'inputPrivacyValueAllowAll',
}

export type inputPrivacyValueAllowUsers = {
  _: 'inputPrivacyValueAllowUsers',
  users: Array<InputUser>,
}

export type inputPrivacyValueDisallowContacts = {
  _: 'inputPrivacyValueDisallowContacts',
}

export type inputPrivacyValueDisallowAll = {
  _: 'inputPrivacyValueDisallowAll',
}

export type inputPrivacyValueDisallowUsers = {
  _: 'inputPrivacyValueDisallowUsers',
  users: Array<InputUser>,
}

export type privacyValueAllowContacts = {
  _: 'privacyValueAllowContacts',
}

export type privacyValueAllowAll = {
  _: 'privacyValueAllowAll',
}

export type privacyValueAllowUsers = {
  _: 'privacyValueAllowUsers',
  users: Array<int>,
}

export type privacyValueDisallowContacts = {
  _: 'privacyValueDisallowContacts',
}

export type privacyValueDisallowAll = {
  _: 'privacyValueDisallowAll',
}

export type privacyValueDisallowUsers = {
  _: 'privacyValueDisallowUsers',
  users: Array<int>,
}

export type account_privacyRules = {
  _: 'account.privacyRules',
  rules: Array<PrivacyRule>,
  users: Array<User>,
}

export type accountDaysTTL = {
  _: 'accountDaysTTL',
  days: int,
}

export type documentAttributeImageSize = {
  _: 'documentAttributeImageSize',
  w: int,
  h: int,
}

export type documentAttributeAnimated = {
  _: 'documentAttributeAnimated',
}

export type documentAttributeSticker = {
  _: 'documentAttributeSticker',
  flags: number,
  mask?: true,
  alt: string,
  stickerset: InputStickerSet,
  mask_coords?: MaskCoords,
}

export type documentAttributeVideo = {
  _: 'documentAttributeVideo',
  flags: number,
  round_message?: true,
  supports_streaming?: true,
  duration: int,
  w: int,
  h: int,
}

export type documentAttributeAudio = {
  _: 'documentAttributeAudio',
  flags: number,
  voice?: true,
  duration: int,
  title?: string,
  performer?: string,
  waveform?: bytes,
}

export type documentAttributeFilename = {
  _: 'documentAttributeFilename',
  file_name: string,
}

export type documentAttributeHasStickers = {
  _: 'documentAttributeHasStickers',
}

export type messages_stickersNotModified = {
  _: 'messages.stickersNotModified',
}

export type messages_stickers = {
  _: 'messages.stickers',
  hash: int,
  stickers: Array<Document>,
}

export type stickerPack = {
  _: 'stickerPack',
  emoticon: string,
  documents: Array<long>,
}

export type messages_allStickersNotModified = {
  _: 'messages.allStickersNotModified',
}

export type messages_allStickers = {
  _: 'messages.allStickers',
  hash: int,
  sets: Array<StickerSet>,
}

export type messages_affectedMessages = {
  _: 'messages.affectedMessages',
  pts: int,
  pts_count: int,
}

export type contactLinkUnknown = {
  _: 'contactLinkUnknown',
}

export type contactLinkNone = {
  _: 'contactLinkNone',
}

export type contactLinkHasPhone = {
  _: 'contactLinkHasPhone',
}

export type contactLinkContact = {
  _: 'contactLinkContact',
}

export type webPageEmpty = {
  _: 'webPageEmpty',
  id: long,
}

export type webPagePending = {
  _: 'webPagePending',
  id: long,
  date: int,
}

export type webPage = {
  _: 'webPage',
  flags: number,
  id: long,
  url: string,
  display_url: string,
  hash: int,
  type?: string,
  site_name?: string,
  title?: string,
  description?: string,
  photo?: Photo,
  embed_url?: string,
  embed_type?: string,
  embed_width?: int,
  embed_height?: int,
  duration?: int,
  author?: string,
  document?: Document,
  cached_page?: Page,
}

export type webPageNotModified = {
  _: 'webPageNotModified',
}

export type authorization = {
  _: 'authorization',
  hash: long,
  flags: int,
  device_model: string,
  platform: string,
  system_version: string,
  api_id: int,
  app_name: string,
  app_version: string,
  date_created: int,
  date_active: int,
  ip: string,
  country: string,
  region: string,
}

export type account_authorizations = {
  _: 'account.authorizations',
  authorizations: Array<Authorization>,
}

export type account_noPassword = {
  _: 'account.noPassword',
  new_salt: bytes,
  new_secure_salt: bytes,
  secure_random: bytes,
  email_unconfirmed_pattern: string,
}

export type account_password = {
  _: 'account.password',
  flags: number,
  has_recovery?: true,
  has_secure_values?: true,
  current_salt: bytes,
  new_salt: bytes,
  new_secure_salt: bytes,
  secure_random: bytes,
  hint: string,
  email_unconfirmed_pattern: string,
}

export type account_passwordSettings = {
  _: 'account.passwordSettings',
  email: string,
  secure_salt: bytes,
  secure_secret: bytes,
  secure_secret_id: long,
}

export type account_passwordInputSettings = {
  _: 'account.passwordInputSettings',
  flags: number,
  new_salt?: bytes,
  new_password_hash?: bytes,
  hint?: string,
  email?: string,
  new_secure_salt?: bytes,
  new_secure_secret?: bytes,
  new_secure_secret_id?: long,
}

export type auth_passwordRecovery = {
  _: 'auth.passwordRecovery',
  email_pattern: string,
}

export type receivedNotifyMessage = {
  _: 'receivedNotifyMessage',
  id: int,
  flags: int,
}

export type chatInviteEmpty = {
  _: 'chatInviteEmpty',
}

export type chatInviteExported = {
  _: 'chatInviteExported',
  link: string,
}

export type chatInviteAlready = {
  _: 'chatInviteAlready',
  chat: Chat,
}

export type chatInvite = {
  _: 'chatInvite',
  flags: number,
  channel?: true,
  broadcast?: true,
  public?: true,
  megagroup?: true,
  title: string,
  photo: ChatPhoto,
  participants_count: int,
  participants?: Array<User>,
}

export type inputStickerSetEmpty = {
  _: 'inputStickerSetEmpty',
}

export type inputStickerSetID = {
  _: 'inputStickerSetID',
  id: long,
  access_hash: long,
}

export type inputStickerSetShortName = {
  _: 'inputStickerSetShortName',
  short_name: string,
}

export type stickerSet = {
  _: 'stickerSet',
  flags: number,
  archived?: true,
  official?: true,
  masks?: true,
  installed_date?: int,
  id: long,
  access_hash: long,
  title: string,
  short_name: string,
  count: int,
  hash: int,
}

export type messages_stickerSet = {
  _: 'messages.stickerSet',
  set: StickerSet,
  packs: Array<StickerPack>,
  documents: Array<Document>,
}

export type botCommand = {
  _: 'botCommand',
  command: string,
  description: string,
}

export type botInfo = {
  _: 'botInfo',
  user_id: int,
  description: string,
  commands: Array<BotCommand>,
}

export type keyboardButton = {
  _: 'keyboardButton',
  text: string,
}

export type keyboardButtonUrl = {
  _: 'keyboardButtonUrl',
  text: string,
  url: string,
}

export type keyboardButtonCallback = {
  _: 'keyboardButtonCallback',
  text: string,
  data: bytes,
}

export type keyboardButtonRequestPhone = {
  _: 'keyboardButtonRequestPhone',
  text: string,
}

export type keyboardButtonRequestGeoLocation = {
  _: 'keyboardButtonRequestGeoLocation',
  text: string,
}

export type keyboardButtonSwitchInline = {
  _: 'keyboardButtonSwitchInline',
  flags: number,
  same_peer?: true,
  text: string,
  query: string,
}

export type keyboardButtonGame = {
  _: 'keyboardButtonGame',
  text: string,
}

export type keyboardButtonBuy = {
  _: 'keyboardButtonBuy',
  text: string,
}

export type keyboardButtonRow = {
  _: 'keyboardButtonRow',
  buttons: Array<KeyboardButton>,
}

export type replyKeyboardHide = {
  _: 'replyKeyboardHide',
  flags: number,
  selective?: true,
}

export type replyKeyboardForceReply = {
  _: 'replyKeyboardForceReply',
  flags: number,
  single_use?: true,
  selective?: true,
}

export type replyKeyboardMarkup = {
  _: 'replyKeyboardMarkup',
  flags: number,
  resize?: true,
  single_use?: true,
  selective?: true,
  rows: Array<KeyboardButtonRow>,
}

export type replyInlineMarkup = {
  _: 'replyInlineMarkup',
  rows: Array<KeyboardButtonRow>,
}

export type messageEntityUnknown = {
  _: 'messageEntityUnknown',
  offset: int,
  length: int,
}

export type messageEntityMention = {
  _: 'messageEntityMention',
  offset: int,
  length: int,
}

export type messageEntityHashtag = {
  _: 'messageEntityHashtag',
  offset: int,
  length: int,
}

export type messageEntityBotCommand = {
  _: 'messageEntityBotCommand',
  offset: int,
  length: int,
}

export type messageEntityUrl = {
  _: 'messageEntityUrl',
  offset: int,
  length: int,
}

export type messageEntityEmail = {
  _: 'messageEntityEmail',
  offset: int,
  length: int,
}

export type messageEntityBold = {
  _: 'messageEntityBold',
  offset: int,
  length: int,
}

export type messageEntityItalic = {
  _: 'messageEntityItalic',
  offset: int,
  length: int,
}

export type messageEntityCode = {
  _: 'messageEntityCode',
  offset: int,
  length: int,
}

export type messageEntityPre = {
  _: 'messageEntityPre',
  offset: int,
  length: int,
  language: string,
}

export type messageEntityTextUrl = {
  _: 'messageEntityTextUrl',
  offset: int,
  length: int,
  url: string,
}

export type messageEntityMentionName = {
  _: 'messageEntityMentionName',
  offset: int,
  length: int,
  user_id: int,
}

export type inputMessageEntityMentionName = {
  _: 'inputMessageEntityMentionName',
  offset: int,
  length: int,
  user_id: InputUser,
}

export type messageEntityPhone = {
  _: 'messageEntityPhone',
  offset: int,
  length: int,
}

export type messageEntityCashtag = {
  _: 'messageEntityCashtag',
  offset: int,
  length: int,
}

export type inputChannelEmpty = {
  _: 'inputChannelEmpty',
}

export type inputChannel = {
  _: 'inputChannel',
  channel_id: int,
  access_hash: long,
}

export type contacts_resolvedPeer = {
  _: 'contacts.resolvedPeer',
  peer: Peer,
  chats: Array<Chat>,
  users: Array<User>,
}

export type messageRange = {
  _: 'messageRange',
  min_id: int,
  max_id: int,
}

export type updates_channelDifferenceEmpty = {
  _: 'updates.channelDifferenceEmpty',
  flags: number,
  final?: true,
  pts: int,
  timeout?: int,
}

export type updates_channelDifferenceTooLong = {
  _: 'updates.channelDifferenceTooLong',
  flags: number,
  final?: true,
  pts: int,
  timeout?: int,
  top_message: int,
  read_inbox_max_id: int,
  read_outbox_max_id: int,
  unread_count: int,
  unread_mentions_count: int,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type updates_channelDifference = {
  _: 'updates.channelDifference',
  flags: number,
  final?: true,
  pts: int,
  timeout?: int,
  new_messages: Array<Message>,
  other_updates: Array<Update>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type channelMessagesFilterEmpty = {
  _: 'channelMessagesFilterEmpty',
}

export type channelMessagesFilter = {
  _: 'channelMessagesFilter',
  flags: number,
  exclude_new_messages?: true,
  ranges: Array<MessageRange>,
}

export type channelParticipant = {
  _: 'channelParticipant',
  user_id: int,
  date: int,
}

export type channelParticipantSelf = {
  _: 'channelParticipantSelf',
  user_id: int,
  inviter_id: int,
  date: int,
}

export type channelParticipantCreator = {
  _: 'channelParticipantCreator',
  user_id: int,
}

export type channelParticipantAdmin = {
  _: 'channelParticipantAdmin',
  flags: number,
  can_edit?: true,
  user_id: int,
  inviter_id: int,
  promoted_by: int,
  date: int,
  admin_rights: ChannelAdminRights,
}

export type channelParticipantBanned = {
  _: 'channelParticipantBanned',
  flags: number,
  left?: true,
  user_id: int,
  kicked_by: int,
  date: int,
  banned_rights: ChannelBannedRights,
}

export type channelParticipantsRecent = {
  _: 'channelParticipantsRecent',
}

export type channelParticipantsAdmins = {
  _: 'channelParticipantsAdmins',
}

export type channelParticipantsKicked = {
  _: 'channelParticipantsKicked',
  q: string,
}

export type channelParticipantsBots = {
  _: 'channelParticipantsBots',
}

export type channelParticipantsBanned = {
  _: 'channelParticipantsBanned',
  q: string,
}

export type channelParticipantsSearch = {
  _: 'channelParticipantsSearch',
  q: string,
}

export type channels_channelParticipants = {
  _: 'channels.channelParticipants',
  count: int,
  participants: Array<ChannelParticipant>,
  users: Array<User>,
}

export type channels_channelParticipantsNotModified = {
  _: 'channels.channelParticipantsNotModified',
}

export type channels_channelParticipant = {
  _: 'channels.channelParticipant',
  participant: ChannelParticipant,
  users: Array<User>,
}

export type help_termsOfService = {
  _: 'help.termsOfService',
  flags: number,
  popup?: true,
  id: DataJSON,
  text: string,
  entities: Array<MessageEntity>,
  min_age_confirm?: int,
}

export type foundGif = {
  _: 'foundGif',
  url: string,
  thumb_url: string,
  content_url: string,
  content_type: string,
  w: int,
  h: int,
}

export type foundGifCached = {
  _: 'foundGifCached',
  url: string,
  photo: Photo,
  document: Document,
}

export type messages_foundGifs = {
  _: 'messages.foundGifs',
  next_offset: int,
  results: Array<FoundGif>,
}

export type messages_savedGifsNotModified = {
  _: 'messages.savedGifsNotModified',
}

export type messages_savedGifs = {
  _: 'messages.savedGifs',
  hash: int,
  gifs: Array<Document>,
}

export type inputBotInlineMessageMediaAuto = {
  _: 'inputBotInlineMessageMediaAuto',
  flags: number,
  message: string,
  entities?: Array<MessageEntity>,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineMessageText = {
  _: 'inputBotInlineMessageText',
  flags: number,
  no_webpage?: true,
  message: string,
  entities?: Array<MessageEntity>,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineMessageMediaGeo = {
  _: 'inputBotInlineMessageMediaGeo',
  flags: number,
  geo_point: InputGeoPoint,
  period: int,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineMessageMediaVenue = {
  _: 'inputBotInlineMessageMediaVenue',
  flags: number,
  geo_point: InputGeoPoint,
  title: string,
  address: string,
  provider: string,
  venue_id: string,
  venue_type: string,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineMessageMediaContact = {
  _: 'inputBotInlineMessageMediaContact',
  flags: number,
  phone_number: string,
  first_name: string,
  last_name: string,
  vcard: string,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineMessageGame = {
  _: 'inputBotInlineMessageGame',
  flags: number,
  reply_markup?: ReplyMarkup,
}

export type inputBotInlineResult = {
  _: 'inputBotInlineResult',
  flags: number,
  id: string,
  type: string,
  title?: string,
  description?: string,
  url?: string,
  thumb?: InputWebDocument,
  content?: InputWebDocument,
  send_message: InputBotInlineMessage,
}

export type inputBotInlineResultPhoto = {
  _: 'inputBotInlineResultPhoto',
  id: string,
  type: string,
  photo: InputPhoto,
  send_message: InputBotInlineMessage,
}

export type inputBotInlineResultDocument = {
  _: 'inputBotInlineResultDocument',
  flags: number,
  id: string,
  type: string,
  title?: string,
  description?: string,
  document: InputDocument,
  send_message: InputBotInlineMessage,
}

export type inputBotInlineResultGame = {
  _: 'inputBotInlineResultGame',
  id: string,
  short_name: string,
  send_message: InputBotInlineMessage,
}

export type botInlineMessageMediaAuto = {
  _: 'botInlineMessageMediaAuto',
  flags: number,
  message: string,
  entities?: Array<MessageEntity>,
  reply_markup?: ReplyMarkup,
}

export type botInlineMessageText = {
  _: 'botInlineMessageText',
  flags: number,
  no_webpage?: true,
  message: string,
  entities?: Array<MessageEntity>,
  reply_markup?: ReplyMarkup,
}

export type botInlineMessageMediaGeo = {
  _: 'botInlineMessageMediaGeo',
  flags: number,
  geo: GeoPoint,
  period: int,
  reply_markup?: ReplyMarkup,
}

export type botInlineMessageMediaVenue = {
  _: 'botInlineMessageMediaVenue',
  flags: number,
  geo: GeoPoint,
  title: string,
  address: string,
  provider: string,
  venue_id: string,
  venue_type: string,
  reply_markup?: ReplyMarkup,
}

export type botInlineMessageMediaContact = {
  _: 'botInlineMessageMediaContact',
  flags: number,
  phone_number: string,
  first_name: string,
  last_name: string,
  vcard: string,
  reply_markup?: ReplyMarkup,
}

export type botInlineResult = {
  _: 'botInlineResult',
  flags: number,
  id: string,
  type: string,
  title?: string,
  description?: string,
  url?: string,
  thumb?: WebDocument,
  content?: WebDocument,
  send_message: BotInlineMessage,
}

export type botInlineMediaResult = {
  _: 'botInlineMediaResult',
  flags: number,
  id: string,
  type: string,
  photo?: Photo,
  document?: Document,
  title?: string,
  description?: string,
  send_message: BotInlineMessage,
}

export type messages_botResults = {
  _: 'messages.botResults',
  flags: number,
  gallery?: true,
  query_id: long,
  next_offset?: string,
  switch_pm?: InlineBotSwitchPM,
  results: Array<BotInlineResult>,
  cache_time: int,
  users: Array<User>,
}

export type exportedMessageLink = {
  _: 'exportedMessageLink',
  link: string,
  html: string,
}

export type messageFwdHeader = {
  _: 'messageFwdHeader',
  flags: number,
  from_id?: int,
  date: int,
  channel_id?: int,
  channel_post?: int,
  post_author?: string,
  saved_from_peer?: Peer,
  saved_from_msg_id?: int,
}

export type auth_codeTypeSms = {
  _: 'auth.codeTypeSms',
}

export type auth_codeTypeCall = {
  _: 'auth.codeTypeCall',
}

export type auth_codeTypeFlashCall = {
  _: 'auth.codeTypeFlashCall',
}

export type auth_sentCodeTypeApp = {
  _: 'auth.sentCodeTypeApp',
  length: int,
}

export type auth_sentCodeTypeSms = {
  _: 'auth.sentCodeTypeSms',
  length: int,
}

export type auth_sentCodeTypeCall = {
  _: 'auth.sentCodeTypeCall',
  length: int,
}

export type auth_sentCodeTypeFlashCall = {
  _: 'auth.sentCodeTypeFlashCall',
  pattern: string,
}

export type messages_botCallbackAnswer = {
  _: 'messages.botCallbackAnswer',
  flags: number,
  alert?: true,
  has_url?: true,
  native_ui?: true,
  message?: string,
  url?: string,
  cache_time: int,
}

export type messages_messageEditData = {
  _: 'messages.messageEditData',
  flags: number,
  caption?: true,
}

export type inputBotInlineMessageID = {
  _: 'inputBotInlineMessageID',
  dc_id: int,
  id: long,
  access_hash: long,
}

export type inlineBotSwitchPM = {
  _: 'inlineBotSwitchPM',
  text: string,
  start_param: string,
}

export type messages_peerDialogs = {
  _: 'messages.peerDialogs',
  dialogs: Array<Dialog>,
  messages: Array<Message>,
  chats: Array<Chat>,
  users: Array<User>,
  state: updates_State,
}

export type topPeer = {
  _: 'topPeer',
  peer: Peer,
  rating: double,
}

export type topPeerCategoryBotsPM = {
  _: 'topPeerCategoryBotsPM',
}

export type topPeerCategoryBotsInline = {
  _: 'topPeerCategoryBotsInline',
}

export type topPeerCategoryCorrespondents = {
  _: 'topPeerCategoryCorrespondents',
}

export type topPeerCategoryGroups = {
  _: 'topPeerCategoryGroups',
}

export type topPeerCategoryChannels = {
  _: 'topPeerCategoryChannels',
}

export type topPeerCategoryPhoneCalls = {
  _: 'topPeerCategoryPhoneCalls',
}

export type topPeerCategoryPeers = {
  _: 'topPeerCategoryPeers',
  category: TopPeerCategory,
  count: int,
  peers: Array<TopPeer>,
}

export type contacts_topPeersNotModified = {
  _: 'contacts.topPeersNotModified',
}

export type contacts_topPeers = {
  _: 'contacts.topPeers',
  categories: Array<TopPeerCategoryPeers>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type contacts_topPeersDisabled = {
  _: 'contacts.topPeersDisabled',
}

export type draftMessageEmpty = {
  _: 'draftMessageEmpty',
  flags: number,
  date?: int,
}

export type draftMessage = {
  _: 'draftMessage',
  flags: number,
  no_webpage?: true,
  reply_to_msg_id?: int,
  message: string,
  entities?: Array<MessageEntity>,
  date: int,
}

export type messages_featuredStickersNotModified = {
  _: 'messages.featuredStickersNotModified',
}

export type messages_featuredStickers = {
  _: 'messages.featuredStickers',
  hash: int,
  sets: Array<StickerSetCovered>,
  unread: Array<long>,
}

export type messages_recentStickersNotModified = {
  _: 'messages.recentStickersNotModified',
}

export type messages_recentStickers = {
  _: 'messages.recentStickers',
  hash: int,
  packs: Array<StickerPack>,
  stickers: Array<Document>,
  dates: Array<int>,
}

export type messages_archivedStickers = {
  _: 'messages.archivedStickers',
  count: int,
  sets: Array<StickerSetCovered>,
}

export type messages_stickerSetInstallResultSuccess = {
  _: 'messages.stickerSetInstallResultSuccess',
}

export type messages_stickerSetInstallResultArchive = {
  _: 'messages.stickerSetInstallResultArchive',
  sets: Array<StickerSetCovered>,
}

export type stickerSetCovered = {
  _: 'stickerSetCovered',
  set: StickerSet,
  cover: Document,
}

export type stickerSetMultiCovered = {
  _: 'stickerSetMultiCovered',
  set: StickerSet,
  covers: Array<Document>,
}

export type maskCoords = {
  _: 'maskCoords',
  n: int,
  x: double,
  y: double,
  zoom: double,
}

export type inputStickeredMediaPhoto = {
  _: 'inputStickeredMediaPhoto',
  id: InputPhoto,
}

export type inputStickeredMediaDocument = {
  _: 'inputStickeredMediaDocument',
  id: InputDocument,
}

export type game = {
  _: 'game',
  flags: number,
  id: long,
  access_hash: long,
  short_name: string,
  title: string,
  description: string,
  photo: Photo,
  document?: Document,
}

export type inputGameID = {
  _: 'inputGameID',
  id: long,
  access_hash: long,
}

export type inputGameShortName = {
  _: 'inputGameShortName',
  bot_id: InputUser,
  short_name: string,
}

export type highScore = {
  _: 'highScore',
  pos: int,
  user_id: int,
  score: int,
}

export type messages_highScores = {
  _: 'messages.highScores',
  scores: Array<HighScore>,
  users: Array<User>,
}

export type textEmpty = {
  _: 'textEmpty',
}

export type textPlain = {
  _: 'textPlain',
  text: string,
}

export type textBold = {
  _: 'textBold',
  text: RichText,
}

export type textItalic = {
  _: 'textItalic',
  text: RichText,
}

export type textUnderline = {
  _: 'textUnderline',
  text: RichText,
}

export type textStrike = {
  _: 'textStrike',
  text: RichText,
}

export type textFixed = {
  _: 'textFixed',
  text: RichText,
}

export type textUrl = {
  _: 'textUrl',
  text: RichText,
  url: string,
  webpage_id: long,
}

export type textEmail = {
  _: 'textEmail',
  text: RichText,
  email: string,
}

export type textConcat = {
  _: 'textConcat',
  texts: Array<RichText>,
}

export type pageBlockUnsupported = {
  _: 'pageBlockUnsupported',
}

export type pageBlockTitle = {
  _: 'pageBlockTitle',
  text: RichText,
}

export type pageBlockSubtitle = {
  _: 'pageBlockSubtitle',
  text: RichText,
}

export type pageBlockAuthorDate = {
  _: 'pageBlockAuthorDate',
  author: RichText,
  published_date: int,
}

export type pageBlockHeader = {
  _: 'pageBlockHeader',
  text: RichText,
}

export type pageBlockSubheader = {
  _: 'pageBlockSubheader',
  text: RichText,
}

export type pageBlockParagraph = {
  _: 'pageBlockParagraph',
  text: RichText,
}

export type pageBlockPreformatted = {
  _: 'pageBlockPreformatted',
  text: RichText,
  language: string,
}

export type pageBlockFooter = {
  _: 'pageBlockFooter',
  text: RichText,
}

export type pageBlockDivider = {
  _: 'pageBlockDivider',
}

export type pageBlockAnchor = {
  _: 'pageBlockAnchor',
  name: string,
}

export type pageBlockList = {
  _: 'pageBlockList',
  ordered: Bool,
  items: Array<RichText>,
}

export type pageBlockBlockquote = {
  _: 'pageBlockBlockquote',
  text: RichText,
  caption: RichText,
}

export type pageBlockPullquote = {
  _: 'pageBlockPullquote',
  text: RichText,
  caption: RichText,
}

export type pageBlockPhoto = {
  _: 'pageBlockPhoto',
  photo_id: long,
  caption: RichText,
}

export type pageBlockVideo = {
  _: 'pageBlockVideo',
  flags: number,
  autoplay?: true,
  loop?: true,
  video_id: long,
  caption: RichText,
}

export type pageBlockCover = {
  _: 'pageBlockCover',
  cover: PageBlock,
}

export type pageBlockEmbed = {
  _: 'pageBlockEmbed',
  flags: number,
  full_width?: true,
  allow_scrolling?: true,
  url?: string,
  html?: string,
  poster_photo_id?: long,
  w: int,
  h: int,
  caption: RichText,
}

export type pageBlockEmbedPost = {
  _: 'pageBlockEmbedPost',
  url: string,
  webpage_id: long,
  author_photo_id: long,
  author: string,
  date: int,
  blocks: Array<PageBlock>,
  caption: RichText,
}

export type pageBlockCollage = {
  _: 'pageBlockCollage',
  items: Array<PageBlock>,
  caption: RichText,
}

export type pageBlockSlideshow = {
  _: 'pageBlockSlideshow',
  items: Array<PageBlock>,
  caption: RichText,
}

export type pageBlockChannel = {
  _: 'pageBlockChannel',
  channel: Chat,
}

export type pageBlockAudio = {
  _: 'pageBlockAudio',
  audio_id: long,
  caption: RichText,
}

export type pagePart = {
  _: 'pagePart',
  blocks: Array<PageBlock>,
  photos: Array<Photo>,
  documents: Array<Document>,
}

export type pageFull = {
  _: 'pageFull',
  blocks: Array<PageBlock>,
  photos: Array<Photo>,
  documents: Array<Document>,
}

export type phoneCallDiscardReasonMissed = {
  _: 'phoneCallDiscardReasonMissed',
}

export type phoneCallDiscardReasonDisconnect = {
  _: 'phoneCallDiscardReasonDisconnect',
}

export type phoneCallDiscardReasonHangup = {
  _: 'phoneCallDiscardReasonHangup',
}

export type phoneCallDiscardReasonBusy = {
  _: 'phoneCallDiscardReasonBusy',
}

export type dataJSON = {
  _: 'dataJSON',
  data: string,
}

export type labeledPrice = {
  _: 'labeledPrice',
  label: string,
  amount: long,
}

export type invoice = {
  _: 'invoice',
  flags: number,
  test?: true,
  name_requested?: true,
  phone_requested?: true,
  email_requested?: true,
  shipping_address_requested?: true,
  flexible?: true,
  phone_to_provider?: true,
  email_to_provider?: true,
  currency: string,
  prices: Array<LabeledPrice>,
}

export type paymentCharge = {
  _: 'paymentCharge',
  id: string,
  provider_charge_id: string,
}

export type postAddress = {
  _: 'postAddress',
  street_line1: string,
  street_line2: string,
  city: string,
  state: string,
  country_iso2: string,
  post_code: string,
}

export type paymentRequestedInfo = {
  _: 'paymentRequestedInfo',
  flags: number,
  name?: string,
  phone?: string,
  email?: string,
  shipping_address?: PostAddress,
}

export type paymentSavedCredentialsCard = {
  _: 'paymentSavedCredentialsCard',
  id: string,
  title: string,
}

export type webDocument = {
  _: 'webDocument',
  url: string,
  access_hash: long,
  size: int,
  mime_type: string,
  attributes: Array<DocumentAttribute>,
}

export type webDocumentNoProxy = {
  _: 'webDocumentNoProxy',
  url: string,
  size: int,
  mime_type: string,
  attributes: Array<DocumentAttribute>,
}

export type inputWebDocument = {
  _: 'inputWebDocument',
  url: string,
  size: int,
  mime_type: string,
  attributes: Array<DocumentAttribute>,
}

export type inputWebFileLocation = {
  _: 'inputWebFileLocation',
  url: string,
  access_hash: long,
}

export type inputWebFileGeoPointLocation = {
  _: 'inputWebFileGeoPointLocation',
  geo_point: InputGeoPoint,
  access_hash: long,
  w: int,
  h: int,
  zoom: int,
  scale: int,
}

export type upload_webFile = {
  _: 'upload.webFile',
  size: int,
  mime_type: string,
  file_type: storage_FileType,
  mtime: int,
  bytes: bytes,
}

export type payments_paymentForm = {
  _: 'payments.paymentForm',
  flags: number,
  can_save_credentials?: true,
  password_missing?: true,
  bot_id: int,
  invoice: Invoice,
  provider_id: int,
  url: string,
  native_provider?: string,
  native_params?: DataJSON,
  saved_info?: PaymentRequestedInfo,
  saved_credentials?: PaymentSavedCredentials,
  users: Array<User>,
}

export type payments_validatedRequestedInfo = {
  _: 'payments.validatedRequestedInfo',
  flags: number,
  id?: string,
  shipping_options?: Array<ShippingOption>,
}

export type payments_paymentResult = {
  _: 'payments.paymentResult',
  updates: Updates,
}

export type payments_paymentVerficationNeeded = {
  _: 'payments.paymentVerficationNeeded',
  url: string,
}

export type payments_paymentReceipt = {
  _: 'payments.paymentReceipt',
  flags: number,
  date: int,
  bot_id: int,
  invoice: Invoice,
  provider_id: int,
  info?: PaymentRequestedInfo,
  shipping?: ShippingOption,
  currency: string,
  total_amount: long,
  credentials_title: string,
  users: Array<User>,
}

export type payments_savedInfo = {
  _: 'payments.savedInfo',
  flags: number,
  has_saved_credentials?: true,
  saved_info?: PaymentRequestedInfo,
}

export type inputPaymentCredentialsSaved = {
  _: 'inputPaymentCredentialsSaved',
  id: string,
  tmp_password: bytes,
}

export type inputPaymentCredentials = {
  _: 'inputPaymentCredentials',
  flags: number,
  save?: true,
  data: DataJSON,
}

export type inputPaymentCredentialsApplePay = {
  _: 'inputPaymentCredentialsApplePay',
  payment_data: DataJSON,
}

export type inputPaymentCredentialsAndroidPay = {
  _: 'inputPaymentCredentialsAndroidPay',
  payment_token: DataJSON,
  google_transaction_id: string,
}

export type account_tmpPassword = {
  _: 'account.tmpPassword',
  tmp_password: bytes,
  valid_until: int,
}

export type shippingOption = {
  _: 'shippingOption',
  id: string,
  title: string,
  prices: Array<LabeledPrice>,
}

export type inputStickerSetItem = {
  _: 'inputStickerSetItem',
  flags: number,
  document: InputDocument,
  emoji: string,
  mask_coords?: MaskCoords,
}

export type inputPhoneCall = {
  _: 'inputPhoneCall',
  id: long,
  access_hash: long,
}

export type phoneCallEmpty = {
  _: 'phoneCallEmpty',
  id: long,
}

export type phoneCallWaiting = {
  _: 'phoneCallWaiting',
  flags: number,
  id: long,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  protocol: PhoneCallProtocol,
  receive_date?: int,
}

export type phoneCallRequested = {
  _: 'phoneCallRequested',
  id: long,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  g_a_hash: bytes,
  protocol: PhoneCallProtocol,
}

export type phoneCallAccepted = {
  _: 'phoneCallAccepted',
  id: long,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  g_b: bytes,
  protocol: PhoneCallProtocol,
}

export type phoneCall = {
  _: 'phoneCall',
  id: long,
  access_hash: long,
  date: int,
  admin_id: int,
  participant_id: int,
  g_a_or_b: bytes,
  key_fingerprint: long,
  protocol: PhoneCallProtocol,
  connection: PhoneConnection,
  alternative_connections: Array<PhoneConnection>,
  start_date: int,
}

export type phoneCallDiscarded = {
  _: 'phoneCallDiscarded',
  flags: number,
  need_rating?: true,
  need_debug?: true,
  id: long,
  reason?: PhoneCallDiscardReason,
  duration?: int,
}

export type phoneConnection = {
  _: 'phoneConnection',
  id: long,
  ip: string,
  ipv6: string,
  port: int,
  peer_tag: bytes,
}

export type phoneCallProtocol = {
  _: 'phoneCallProtocol',
  flags: number,
  udp_p2p?: true,
  udp_reflector?: true,
  min_layer: int,
  max_layer: int,
}

export type phone_phoneCall = {
  _: 'phone.phoneCall',
  phone_call: PhoneCall,
  users: Array<User>,
}

export type upload_cdnFileReuploadNeeded = {
  _: 'upload.cdnFileReuploadNeeded',
  request_token: bytes,
}

export type upload_cdnFile = {
  _: 'upload.cdnFile',
  bytes: bytes,
}

export type cdnPublicKey = {
  _: 'cdnPublicKey',
  dc_id: int,
  public_key: string,
}

export type cdnConfig = {
  _: 'cdnConfig',
  public_keys: Array<CdnPublicKey>,
}

export type langPackString = {
  _: 'langPackString',
  key: string,
  value: string,
}

export type langPackStringPluralized = {
  _: 'langPackStringPluralized',
  flags: number,
  key: string,
  zero_value?: string,
  one_value?: string,
  two_value?: string,
  few_value?: string,
  many_value?: string,
  other_value: string,
}

export type langPackStringDeleted = {
  _: 'langPackStringDeleted',
  key: string,
}

export type langPackDifference = {
  _: 'langPackDifference',
  lang_code: string,
  from_version: int,
  version: int,
  strings: Array<LangPackString>,
}

export type langPackLanguage = {
  _: 'langPackLanguage',
  name: string,
  native_name: string,
  lang_code: string,
}

export type channelAdminRights = {
  _: 'channelAdminRights',
  flags: number,
  change_info?: true,
  post_messages?: true,
  edit_messages?: true,
  delete_messages?: true,
  ban_users?: true,
  invite_users?: true,
  invite_link?: true,
  pin_messages?: true,
  add_admins?: true,
  manage_call?: true,
}

export type channelBannedRights = {
  _: 'channelBannedRights',
  flags: number,
  view_messages?: true,
  send_messages?: true,
  send_media?: true,
  send_stickers?: true,
  send_gifs?: true,
  send_games?: true,
  send_inline?: true,
  embed_links?: true,
  until_date: int,
}

export type channelAdminLogEventActionChangeTitle = {
  _: 'channelAdminLogEventActionChangeTitle',
  prev_value: string,
  new_value: string,
}

export type channelAdminLogEventActionChangeAbout = {
  _: 'channelAdminLogEventActionChangeAbout',
  prev_value: string,
  new_value: string,
}

export type channelAdminLogEventActionChangeUsername = {
  _: 'channelAdminLogEventActionChangeUsername',
  prev_value: string,
  new_value: string,
}

export type channelAdminLogEventActionChangePhoto = {
  _: 'channelAdminLogEventActionChangePhoto',
  prev_photo: ChatPhoto,
  new_photo: ChatPhoto,
}

export type channelAdminLogEventActionToggleInvites = {
  _: 'channelAdminLogEventActionToggleInvites',
  new_value: Bool,
}

export type channelAdminLogEventActionToggleSignatures = {
  _: 'channelAdminLogEventActionToggleSignatures',
  new_value: Bool,
}

export type channelAdminLogEventActionUpdatePinned = {
  _: 'channelAdminLogEventActionUpdatePinned',
  message: Message,
}

export type channelAdminLogEventActionEditMessage = {
  _: 'channelAdminLogEventActionEditMessage',
  prev_message: Message,
  new_message: Message,
}

export type channelAdminLogEventActionDeleteMessage = {
  _: 'channelAdminLogEventActionDeleteMessage',
  message: Message,
}

export type channelAdminLogEventActionParticipantJoin = {
  _: 'channelAdminLogEventActionParticipantJoin',
}

export type channelAdminLogEventActionParticipantLeave = {
  _: 'channelAdminLogEventActionParticipantLeave',
}

export type channelAdminLogEventActionParticipantInvite = {
  _: 'channelAdminLogEventActionParticipantInvite',
  participant: ChannelParticipant,
}

export type channelAdminLogEventActionParticipantToggleBan = {
  _: 'channelAdminLogEventActionParticipantToggleBan',
  prev_participant: ChannelParticipant,
  new_participant: ChannelParticipant,
}

export type channelAdminLogEventActionParticipantToggleAdmin = {
  _: 'channelAdminLogEventActionParticipantToggleAdmin',
  prev_participant: ChannelParticipant,
  new_participant: ChannelParticipant,
}

export type channelAdminLogEventActionChangeStickerSet = {
  _: 'channelAdminLogEventActionChangeStickerSet',
  prev_stickerset: InputStickerSet,
  new_stickerset: InputStickerSet,
}

export type channelAdminLogEventActionTogglePreHistoryHidden = {
  _: 'channelAdminLogEventActionTogglePreHistoryHidden',
  new_value: Bool,
}

export type channelAdminLogEvent = {
  _: 'channelAdminLogEvent',
  id: long,
  date: int,
  user_id: int,
  action: ChannelAdminLogEventAction,
}

export type channels_adminLogResults = {
  _: 'channels.adminLogResults',
  events: Array<ChannelAdminLogEvent>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type channelAdminLogEventsFilter = {
  _: 'channelAdminLogEventsFilter',
  flags: number,
  join?: true,
  leave?: true,
  invite?: true,
  ban?: true,
  unban?: true,
  kick?: true,
  unkick?: true,
  promote?: true,
  demote?: true,
  info?: true,
  settings?: true,
  pinned?: true,
  edit?: true,
  delete?: true,
}

export type popularContact = {
  _: 'popularContact',
  client_id: long,
  importers: int,
}

export type messages_favedStickersNotModified = {
  _: 'messages.favedStickersNotModified',
}

export type messages_favedStickers = {
  _: 'messages.favedStickers',
  hash: int,
  packs: Array<StickerPack>,
  stickers: Array<Document>,
}

export type recentMeUrlUnknown = {
  _: 'recentMeUrlUnknown',
  url: string,
}

export type recentMeUrlUser = {
  _: 'recentMeUrlUser',
  url: string,
  user_id: int,
}

export type recentMeUrlChat = {
  _: 'recentMeUrlChat',
  url: string,
  chat_id: int,
}

export type recentMeUrlChatInvite = {
  _: 'recentMeUrlChatInvite',
  url: string,
  chat_invite: ChatInvite,
}

export type recentMeUrlStickerSet = {
  _: 'recentMeUrlStickerSet',
  url: string,
  set: StickerSetCovered,
}

export type help_recentMeUrls = {
  _: 'help.recentMeUrls',
  urls: Array<RecentMeUrl>,
  chats: Array<Chat>,
  users: Array<User>,
}

export type inputSingleMedia = {
  _: 'inputSingleMedia',
  flags: number,
  media: InputMedia,
  random_id: long,
  message: string,
  entities?: Array<MessageEntity>,
}

export type webAuthorization = {
  _: 'webAuthorization',
  hash: long,
  bot_id: int,
  domain: string,
  browser: string,
  platform: string,
  date_created: int,
  date_active: int,
  ip: string,
  region: string,
}

export type account_webAuthorizations = {
  _: 'account.webAuthorizations',
  authorizations: Array<WebAuthorization>,
  users: Array<User>,
}

export type inputMessageID = {
  _: 'inputMessageID',
  id: int,
}

export type inputMessageReplyTo = {
  _: 'inputMessageReplyTo',
  id: int,
}

export type inputMessagePinned = {
  _: 'inputMessagePinned',
}

export type inputDialogPeer = {
  _: 'inputDialogPeer',
  peer: InputPeer,
}

export type dialogPeer = {
  _: 'dialogPeer',
  peer: Peer,
}

export type messages_foundStickerSetsNotModified = {
  _: 'messages.foundStickerSetsNotModified',
}

export type messages_foundStickerSets = {
  _: 'messages.foundStickerSets',
  hash: int,
  sets: Array<StickerSetCovered>,
}

export type fileHash = {
  _: 'fileHash',
  offset: int,
  limit: int,
  hash: bytes,
}

export type inputClientProxy = {
  _: 'inputClientProxy',
  address: string,
  port: int,
}

export type help_proxyDataEmpty = {
  _: 'help.proxyDataEmpty',
  expires: int,
}

export type help_proxyDataPromo = {
  _: 'help.proxyDataPromo',
  expires: int,
  peer: Peer,
  chats: Array<Chat>,
  users: Array<User>,
}

export type help_termsOfServiceUpdateEmpty = {
  _: 'help.termsOfServiceUpdateEmpty',
  expires: int,
}

export type help_termsOfServiceUpdate = {
  _: 'help.termsOfServiceUpdate',
  expires: int,
  terms_of_service: help_TermsOfService,
}

export type inputSecureFileUploaded = {
  _: 'inputSecureFileUploaded',
  id: long,
  parts: int,
  md5_checksum: string,
  file_hash: bytes,
  secret: bytes,
}

export type inputSecureFile = {
  _: 'inputSecureFile',
  id: long,
  access_hash: long,
}

export type secureFileEmpty = {
  _: 'secureFileEmpty',
}

export type secureFile = {
  _: 'secureFile',
  id: long,
  access_hash: long,
  size: int,
  dc_id: int,
  date: int,
  file_hash: bytes,
  secret: bytes,
}

export type secureData = {
  _: 'secureData',
  data: bytes,
  data_hash: bytes,
  secret: bytes,
}

export type securePlainPhone = {
  _: 'securePlainPhone',
  phone: string,
}

export type securePlainEmail = {
  _: 'securePlainEmail',
  email: string,
}

export type secureValueTypePersonalDetails = {
  _: 'secureValueTypePersonalDetails',
}

export type secureValueTypePassport = {
  _: 'secureValueTypePassport',
}

export type secureValueTypeDriverLicense = {
  _: 'secureValueTypeDriverLicense',
}

export type secureValueTypeIdentityCard = {
  _: 'secureValueTypeIdentityCard',
}

export type secureValueTypeInternalPassport = {
  _: 'secureValueTypeInternalPassport',
}

export type secureValueTypeAddress = {
  _: 'secureValueTypeAddress',
}

export type secureValueTypeUtilityBill = {
  _: 'secureValueTypeUtilityBill',
}

export type secureValueTypeBankStatement = {
  _: 'secureValueTypeBankStatement',
}

export type secureValueTypeRentalAgreement = {
  _: 'secureValueTypeRentalAgreement',
}

export type secureValueTypePassportRegistration = {
  _: 'secureValueTypePassportRegistration',
}

export type secureValueTypeTemporaryRegistration = {
  _: 'secureValueTypeTemporaryRegistration',
}

export type secureValueTypePhone = {
  _: 'secureValueTypePhone',
}

export type secureValueTypeEmail = {
  _: 'secureValueTypeEmail',
}

export type secureValue = {
  _: 'secureValue',
  flags: number,
  type: SecureValueType,
  data?: SecureData,
  front_side?: SecureFile,
  reverse_side?: SecureFile,
  selfie?: SecureFile,
  files?: Array<SecureFile>,
  plain_data?: SecurePlainData,
  hash: bytes,
}

export type inputSecureValue = {
  _: 'inputSecureValue',
  flags: number,
  type: SecureValueType,
  data?: SecureData,
  front_side?: InputSecureFile,
  reverse_side?: InputSecureFile,
  selfie?: InputSecureFile,
  files?: Array<InputSecureFile>,
  plain_data?: SecurePlainData,
}

export type secureValueHash = {
  _: 'secureValueHash',
  type: SecureValueType,
  hash: bytes,
}

export type secureValueErrorData = {
  _: 'secureValueErrorData',
  type: SecureValueType,
  data_hash: bytes,
  field: string,
  text: string,
}

export type secureValueErrorFrontSide = {
  _: 'secureValueErrorFrontSide',
  type: SecureValueType,
  file_hash: bytes,
  text: string,
}

export type secureValueErrorReverseSide = {
  _: 'secureValueErrorReverseSide',
  type: SecureValueType,
  file_hash: bytes,
  text: string,
}

export type secureValueErrorSelfie = {
  _: 'secureValueErrorSelfie',
  type: SecureValueType,
  file_hash: bytes,
  text: string,
}

export type secureValueErrorFile = {
  _: 'secureValueErrorFile',
  type: SecureValueType,
  file_hash: bytes,
  text: string,
}

export type secureValueErrorFiles = {
  _: 'secureValueErrorFiles',
  type: SecureValueType,
  file_hash: Array<bytes>,
  text: string,
}

export type secureCredentialsEncrypted = {
  _: 'secureCredentialsEncrypted',
  data: bytes,
  hash: bytes,
  secret: bytes,
}

export type account_authorizationForm = {
  _: 'account.authorizationForm',
  flags: number,
  selfie_required?: true,
  required_types: Array<SecureValueType>,
  values: Array<SecureValue>,
  errors: Array<SecureValueError>,
  users: Array<User>,
  privacy_policy_url?: string,
}

export type account_sentEmailCode = {
  _: 'account.sentEmailCode',
  email_pattern: string,
  length: int,
}

export type help_deepLinkInfoEmpty = {
  _: 'help.deepLinkInfoEmpty',
}

export type help_deepLinkInfo = {
  _: 'help.deepLinkInfo',
  flags: number,
  update_app?: true,
  message: string,
  entities?: Array<MessageEntity>,
}

export type savedPhoneContact = {
  _: 'savedPhoneContact',
  phone: string,
  first_name: string,
  last_name: string,
  date: int,
}

export type account_takeout = {
  _: 'account.takeout',
  id: long,
}

/// Functions ///

export type req_pq = (name: 'req_pq', q: {
  nonce: int128,
}) => Promise<ResPQ>

export type req_pq_multi = (name: 'req_pq_multi', q: {
  nonce: int128,
}) => Promise<ResPQ>

export type req_DH_params = (name: 'req_DH_params', q: {
  nonce: int128,
  server_nonce: int128,
  p: string,
  q: string,
  public_key_fingerprint: long,
  encrypted_data: string,
}) => Promise<Server_DH_Params>

export type set_client_DH_params = (name: 'set_client_DH_params', q: {
  nonce: int128,
  server_nonce: int128,
  encrypted_data: string,
}) => Promise<Set_client_DH_params_answer>

export type destroy_auth_key = (name: 'destroy_auth_key', q: {

}) => Promise<DestroyAuthKeyRes>

export type rpc_drop_answer = (name: 'rpc_drop_answer', q: {
  req_msg_id: long,
}) => Promise<RpcDropAnswer>

export type get_future_salts = (name: 'get_future_salts', q: {
  num: int,
}) => Promise<FutureSalts>

export type ping = (name: 'ping', q: {
  ping_id: long,
}) => Promise<Pong>

export type ping_delay_disconnect = (name: 'ping_delay_disconnect', q: {
  ping_id: long,
  disconnect_delay: int,
}) => Promise<Pong>

export type destroy_session = (name: 'destroy_session', q: {
  session_id: long,
}) => Promise<DestroySessionRes>

export type contest_saveDeveloperInfo = (name: 'contest.saveDeveloperInfo', q: {
  vk_id: int,
  name: string,
  phone_number: string,
  age: int,
  city: string,
}) => Promise<Bool>

export type invokeAfterMsg = (name: 'invokeAfterMsg', q: {
  msg_id: long,
  query: X,
}) => Promise<X>

export type invokeAfterMsgs = (name: 'invokeAfterMsgs', q: {
  msg_ids: Array<long>,
  query: X,
}) => Promise<X>

export type initConnection = (name: 'initConnection', q: {
  flags: number,
  api_id: int,
  device_model: string,
  system_version: string,
  app_version: string,
  system_lang_code: string,
  lang_pack: string,
  lang_code: string,
  proxy?: InputClientProxy,
  query: X,
}) => Promise<X>

export type invokeWithLayer = (name: 'invokeWithLayer', q: {
  layer: int,
  query: X,
}) => Promise<X>

export type invokeWithoutUpdates = (name: 'invokeWithoutUpdates', q: {
  query: X,
}) => Promise<X>

export type invokeWithMessagesRange = (name: 'invokeWithMessagesRange', q: {
  range: MessageRange,
  query: X,
}) => Promise<X>

export type invokeWithTakeout = (name: 'invokeWithTakeout', q: {
  takeout_id: long,
  query: X,
}) => Promise<X>

export type auth_sendCode = (name: 'auth.sendCode', q: {
  flags: number,
  allow_flashcall?: true,
  phone_number: string,
  current_number?: Bool,
  api_id: int,
  api_hash: string,
}) => Promise<auth_SentCode>

export type auth_signUp = (name: 'auth.signUp', q: {
  phone_number: string,
  phone_code_hash: string,
  phone_code: string,
  first_name: string,
  last_name: string,
}) => Promise<auth_Authorization>

export type auth_signIn = (name: 'auth.signIn', q: {
  phone_number: string,
  phone_code_hash: string,
  phone_code: string,
}) => Promise<auth_Authorization>

export type auth_logOut = (name: 'auth.logOut', q: {

}) => Promise<Bool>

export type auth_resetAuthorizations = (name: 'auth.resetAuthorizations', q: {

}) => Promise<Bool>

export type auth_exportAuthorization = (name: 'auth.exportAuthorization', q: {
  dc_id: int,
}) => Promise<auth_ExportedAuthorization>

export type auth_importAuthorization = (name: 'auth.importAuthorization', q: {
  id: int,
  bytes: bytes,
}) => Promise<auth_Authorization>

export type auth_bindTempAuthKey = (name: 'auth.bindTempAuthKey', q: {
  perm_auth_key_id: long,
  nonce: long,
  expires_at: int,
  encrypted_message: bytes,
}) => Promise<Bool>

export type auth_importBotAuthorization = (name: 'auth.importBotAuthorization', q: {
  flags: int,
  api_id: int,
  api_hash: string,
  bot_auth_token: string,
}) => Promise<auth_Authorization>

export type auth_checkPassword = (name: 'auth.checkPassword', q: {
  password_hash: bytes,
}) => Promise<auth_Authorization>

export type auth_requestPasswordRecovery = (name: 'auth.requestPasswordRecovery', q: {

}) => Promise<auth_PasswordRecovery>

export type auth_recoverPassword = (name: 'auth.recoverPassword', q: {
  code: string,
}) => Promise<auth_Authorization>

export type auth_resendCode = (name: 'auth.resendCode', q: {
  phone_number: string,
  phone_code_hash: string,
}) => Promise<auth_SentCode>

export type auth_cancelCode = (name: 'auth.cancelCode', q: {
  phone_number: string,
  phone_code_hash: string,
}) => Promise<Bool>

export type auth_dropTempAuthKeys = (name: 'auth.dropTempAuthKeys', q: {
  except_auth_keys: Array<long>,
}) => Promise<Bool>

export type account_registerDevice = (name: 'account.registerDevice', q: {
  token_type: int,
  token: string,
  app_sandbox: Bool,
  secret: bytes,
  other_uids: Array<int>,
}) => Promise<Bool>

export type account_unregisterDevice = (name: 'account.unregisterDevice', q: {
  token_type: int,
  token: string,
  other_uids: Array<int>,
}) => Promise<Bool>

export type account_updateNotifySettings = (name: 'account.updateNotifySettings', q: {
  peer: InputNotifyPeer,
  settings: InputPeerNotifySettings,
}) => Promise<Bool>

export type account_getNotifySettings = (name: 'account.getNotifySettings', q: {
  peer: InputNotifyPeer,
}) => Promise<PeerNotifySettings>

export type account_resetNotifySettings = (name: 'account.resetNotifySettings', q: {

}) => Promise<Bool>

export type account_updateProfile = (name: 'account.updateProfile', q: {
  flags: number,
  first_name?: string,
  last_name?: string,
  about?: string,
}) => Promise<User>

export type account_updateStatus = (name: 'account.updateStatus', q: {
  offline: Bool,
}) => Promise<Bool>

export type account_getWallPapers = (name: 'account.getWallPapers', q: {

}) => Promise<Array<WallPaper>>

export type account_reportPeer = (name: 'account.reportPeer', q: {
  peer: InputPeer,
  reason: ReportReason,
}) => Promise<Bool>

export type account_checkUsername = (name: 'account.checkUsername', q: {
  username: string,
}) => Promise<Bool>

export type account_updateUsername = (name: 'account.updateUsername', q: {
  username: string,
}) => Promise<User>

export type account_getPrivacy = (name: 'account.getPrivacy', q: {
  key: InputPrivacyKey,
}) => Promise<account_PrivacyRules>

export type account_setPrivacy = (name: 'account.setPrivacy', q: {
  key: InputPrivacyKey,
  rules: Array<InputPrivacyRule>,
}) => Promise<account_PrivacyRules>

export type account_deleteAccount = (name: 'account.deleteAccount', q: {
  reason: string,
}) => Promise<Bool>

export type account_getAccountTTL = (name: 'account.getAccountTTL', q: {

}) => Promise<AccountDaysTTL>

export type account_setAccountTTL = (name: 'account.setAccountTTL', q: {
  ttl: AccountDaysTTL,
}) => Promise<Bool>

export type account_sendChangePhoneCode = (name: 'account.sendChangePhoneCode', q: {
  flags: number,
  allow_flashcall?: true,
  phone_number: string,
  current_number?: Bool,
}) => Promise<auth_SentCode>

export type account_changePhone = (name: 'account.changePhone', q: {
  phone_number: string,
  phone_code_hash: string,
  phone_code: string,
}) => Promise<User>

export type account_updateDeviceLocked = (name: 'account.updateDeviceLocked', q: {
  period: int,
}) => Promise<Bool>

export type account_getAuthorizations = (name: 'account.getAuthorizations', q: {

}) => Promise<account_Authorizations>

export type account_resetAuthorization = (name: 'account.resetAuthorization', q: {
  hash: long,
}) => Promise<Bool>

export type account_getPassword = (name: 'account.getPassword', q: {

}) => Promise<account_Password>

export type account_getPasswordSettings = (name: 'account.getPasswordSettings', q: {
  current_password_hash: bytes,
}) => Promise<account_PasswordSettings>

export type account_updatePasswordSettings = (name: 'account.updatePasswordSettings', q: {
  current_password_hash: bytes,
  new_settings: account_PasswordInputSettings,
}) => Promise<Bool>

export type account_sendConfirmPhoneCode = (name: 'account.sendConfirmPhoneCode', q: {
  flags: number,
  allow_flashcall?: true,
  hash: string,
  current_number?: Bool,
}) => Promise<auth_SentCode>

export type account_confirmPhone = (name: 'account.confirmPhone', q: {
  phone_code_hash: string,
  phone_code: string,
}) => Promise<Bool>

export type account_getTmpPassword = (name: 'account.getTmpPassword', q: {
  password_hash: bytes,
  period: int,
}) => Promise<account_TmpPassword>

export type account_getWebAuthorizations = (name: 'account.getWebAuthorizations', q: {

}) => Promise<account_WebAuthorizations>

export type account_resetWebAuthorization = (name: 'account.resetWebAuthorization', q: {
  hash: long,
}) => Promise<Bool>

export type account_resetWebAuthorizations = (name: 'account.resetWebAuthorizations', q: {

}) => Promise<Bool>

export type account_getAllSecureValues = (name: 'account.getAllSecureValues', q: {

}) => Promise<Array<SecureValue>>

export type account_getSecureValue = (name: 'account.getSecureValue', q: {
  types: Array<SecureValueType>,
}) => Promise<Array<SecureValue>>

export type account_saveSecureValue = (name: 'account.saveSecureValue', q: {
  value: InputSecureValue,
  secure_secret_id: long,
}) => Promise<SecureValue>

export type account_deleteSecureValue = (name: 'account.deleteSecureValue', q: {
  types: Array<SecureValueType>,
}) => Promise<Bool>

export type account_getAuthorizationForm = (name: 'account.getAuthorizationForm', q: {
  bot_id: int,
  scope: string,
  public_key: string,
}) => Promise<account_AuthorizationForm>

export type account_acceptAuthorization = (name: 'account.acceptAuthorization', q: {
  bot_id: int,
  scope: string,
  public_key: string,
  value_hashes: Array<SecureValueHash>,
  credentials: SecureCredentialsEncrypted,
}) => Promise<Bool>

export type account_sendVerifyPhoneCode = (name: 'account.sendVerifyPhoneCode', q: {
  flags: number,
  allow_flashcall?: true,
  phone_number: string,
  current_number?: Bool,
}) => Promise<auth_SentCode>

export type account_verifyPhone = (name: 'account.verifyPhone', q: {
  phone_number: string,
  phone_code_hash: string,
  phone_code: string,
}) => Promise<Bool>

export type account_sendVerifyEmailCode = (name: 'account.sendVerifyEmailCode', q: {
  email: string,
}) => Promise<account_SentEmailCode>

export type account_verifyEmail = (name: 'account.verifyEmail', q: {
  email: string,
  code: string,
}) => Promise<Bool>

export type account_initTakeoutSession = (name: 'account.initTakeoutSession', q: {
  flags: number,
  contacts?: true,
  message_users?: true,
  message_chats?: true,
  message_megagroups?: true,
  message_channels?: true,
  files?: true,
  file_max_size?: int,
}) => Promise<account_Takeout>

export type account_finishTakeoutSession = (name: 'account.finishTakeoutSession', q: {
  flags: number,
  success?: true,
}) => Promise<Bool>

export type users_getUsers = (name: 'users.getUsers', q: {
  id: Array<InputUser>,
}) => Promise<Array<User>>

export type users_getFullUser = (name: 'users.getFullUser', q: {
  id: InputUser,
}) => Promise<UserFull>

export type users_setSecureValueErrors = (name: 'users.setSecureValueErrors', q: {
  id: InputUser,
  errors: Array<SecureValueError>,
}) => Promise<Bool>

export type contacts_getStatuses = (name: 'contacts.getStatuses', q: {

}) => Promise<Array<ContactStatus>>

export type contacts_getContacts = (name: 'contacts.getContacts', q: {
  hash: int,
}) => Promise<contacts_Contacts>

export type contacts_importContacts = (name: 'contacts.importContacts', q: {
  contacts: Array<InputContact>,
}) => Promise<contacts_ImportedContacts>

export type contacts_deleteContact = (name: 'contacts.deleteContact', q: {
  id: InputUser,
}) => Promise<contacts_Link>

export type contacts_deleteContacts = (name: 'contacts.deleteContacts', q: {
  id: Array<InputUser>,
}) => Promise<Bool>

export type contacts_block = (name: 'contacts.block', q: {
  id: InputUser,
}) => Promise<Bool>

export type contacts_unblock = (name: 'contacts.unblock', q: {
  id: InputUser,
}) => Promise<Bool>

export type contacts_getBlocked = (name: 'contacts.getBlocked', q: {
  offset: int,
  limit: int,
}) => Promise<contacts_Blocked>

export type contacts_exportCard = (name: 'contacts.exportCard', q: {

}) => Promise<Array<int>>

export type contacts_importCard = (name: 'contacts.importCard', q: {
  export_card: Array<int>,
}) => Promise<User>

export type contacts_search = (name: 'contacts.search', q: {
  q: string,
  limit: int,
}) => Promise<contacts_Found>

export type contacts_resolveUsername = (name: 'contacts.resolveUsername', q: {
  username: string,
}) => Promise<contacts_ResolvedPeer>

export type contacts_getTopPeers = (name: 'contacts.getTopPeers', q: {
  flags: number,
  correspondents?: true,
  bots_pm?: true,
  bots_inline?: true,
  phone_calls?: true,
  groups?: true,
  channels?: true,
  offset: int,
  limit: int,
  hash: int,
}) => Promise<contacts_TopPeers>

export type contacts_resetTopPeerRating = (name: 'contacts.resetTopPeerRating', q: {
  category: TopPeerCategory,
  peer: InputPeer,
}) => Promise<Bool>

export type contacts_resetSaved = (name: 'contacts.resetSaved', q: {

}) => Promise<Bool>

export type contacts_getSaved = (name: 'contacts.getSaved', q: {

}) => Promise<Array<SavedContact>>

export type contacts_toggleTopPeers = (name: 'contacts.toggleTopPeers', q: {
  enabled: Bool,
}) => Promise<Bool>

export type messages_getMessages = (name: 'messages.getMessages', q: {
  id: Array<InputMessage>,
}) => Promise<messages_Messages>

export type messages_getDialogs = (name: 'messages.getDialogs', q: {
  flags: number,
  exclude_pinned?: true,
  offset_date: int,
  offset_id: int,
  offset_peer: InputPeer,
  limit: int,
  hash: int,
}) => Promise<messages_Dialogs>

export type messages_getHistory = (name: 'messages.getHistory', q: {
  peer: InputPeer,
  offset_id: int,
  offset_date: int,
  add_offset: int,
  limit: int,
  max_id: int,
  min_id: int,
  hash: int,
}) => Promise<messages_Messages>

export type messages_search = (name: 'messages.search', q: {
  flags: number,
  peer: InputPeer,
  q: string,
  from_id?: InputUser,
  filter: MessagesFilter,
  min_date: int,
  max_date: int,
  offset_id: int,
  add_offset: int,
  limit: int,
  max_id: int,
  min_id: int,
  hash: int,
}) => Promise<messages_Messages>

export type messages_readHistory = (name: 'messages.readHistory', q: {
  peer: InputPeer,
  max_id: int,
}) => Promise<messages_AffectedMessages>

export type messages_deleteHistory = (name: 'messages.deleteHistory', q: {
  flags: number,
  just_clear?: true,
  peer: InputPeer,
  max_id: int,
}) => Promise<messages_AffectedHistory>

export type messages_deleteMessages = (name: 'messages.deleteMessages', q: {
  flags: number,
  revoke?: true,
  id: Array<int>,
}) => Promise<messages_AffectedMessages>

export type messages_receivedMessages = (name: 'messages.receivedMessages', q: {
  max_id: int,
}) => Promise<Array<ReceivedNotifyMessage>>

export type messages_setTyping = (name: 'messages.setTyping', q: {
  peer: InputPeer,
  action: SendMessageAction,
}) => Promise<Bool>

export type messages_sendMessage = (name: 'messages.sendMessage', q: {
  flags: number,
  no_webpage?: true,
  silent?: true,
  background?: true,
  clear_draft?: true,
  peer: InputPeer,
  reply_to_msg_id?: int,
  message: string,
  random_id: long,
  reply_markup?: ReplyMarkup,
  entities?: Array<MessageEntity>,
}) => Promise<Updates>

export type messages_sendMedia = (name: 'messages.sendMedia', q: {
  flags: number,
  silent?: true,
  background?: true,
  clear_draft?: true,
  peer: InputPeer,
  reply_to_msg_id?: int,
  media: InputMedia,
  message: string,
  random_id: long,
  reply_markup?: ReplyMarkup,
  entities?: Array<MessageEntity>,
}) => Promise<Updates>

export type messages_forwardMessages = (name: 'messages.forwardMessages', q: {
  flags: number,
  silent?: true,
  background?: true,
  with_my_score?: true,
  grouped?: true,
  from_peer: InputPeer,
  id: Array<int>,
  random_id: Array<long>,
  to_peer: InputPeer,
}) => Promise<Updates>

export type messages_reportSpam = (name: 'messages.reportSpam', q: {
  peer: InputPeer,
}) => Promise<Bool>

export type messages_hideReportSpam = (name: 'messages.hideReportSpam', q: {
  peer: InputPeer,
}) => Promise<Bool>

export type messages_getPeerSettings = (name: 'messages.getPeerSettings', q: {
  peer: InputPeer,
}) => Promise<PeerSettings>

export type messages_report = (name: 'messages.report', q: {
  peer: InputPeer,
  id: Array<int>,
  reason: ReportReason,
}) => Promise<Bool>

export type messages_getChats = (name: 'messages.getChats', q: {
  id: Array<int>,
}) => Promise<messages_Chats>

export type messages_getFullChat = (name: 'messages.getFullChat', q: {
  chat_id: int,
}) => Promise<messages_ChatFull>

export type messages_editChatTitle = (name: 'messages.editChatTitle', q: {
  chat_id: int,
  title: string,
}) => Promise<Updates>

export type messages_editChatPhoto = (name: 'messages.editChatPhoto', q: {
  chat_id: int,
  photo: InputChatPhoto,
}) => Promise<Updates>

export type messages_addChatUser = (name: 'messages.addChatUser', q: {
  chat_id: int,
  user_id: InputUser,
  fwd_limit: int,
}) => Promise<Updates>

export type messages_deleteChatUser = (name: 'messages.deleteChatUser', q: {
  chat_id: int,
  user_id: InputUser,
}) => Promise<Updates>

export type messages_createChat = (name: 'messages.createChat', q: {
  users: Array<InputUser>,
  title: string,
}) => Promise<Updates>

export type messages_getDhConfig = (name: 'messages.getDhConfig', q: {
  version: int,
  random_length: int,
}) => Promise<messages_DhConfig>

export type messages_requestEncryption = (name: 'messages.requestEncryption', q: {
  user_id: InputUser,
  random_id: int,
  g_a: bytes,
}) => Promise<EncryptedChat>

export type messages_acceptEncryption = (name: 'messages.acceptEncryption', q: {
  peer: InputEncryptedChat,
  g_b: bytes,
  key_fingerprint: long,
}) => Promise<EncryptedChat>

export type messages_discardEncryption = (name: 'messages.discardEncryption', q: {
  chat_id: int,
}) => Promise<Bool>

export type messages_setEncryptedTyping = (name: 'messages.setEncryptedTyping', q: {
  peer: InputEncryptedChat,
  typing: Bool,
}) => Promise<Bool>

export type messages_readEncryptedHistory = (name: 'messages.readEncryptedHistory', q: {
  peer: InputEncryptedChat,
  max_date: int,
}) => Promise<Bool>

export type messages_sendEncrypted = (name: 'messages.sendEncrypted', q: {
  peer: InputEncryptedChat,
  random_id: long,
  data: bytes,
}) => Promise<messages_SentEncryptedMessage>

export type messages_sendEncryptedFile = (name: 'messages.sendEncryptedFile', q: {
  peer: InputEncryptedChat,
  random_id: long,
  data: bytes,
  file: InputEncryptedFile,
}) => Promise<messages_SentEncryptedMessage>

export type messages_sendEncryptedService = (name: 'messages.sendEncryptedService', q: {
  peer: InputEncryptedChat,
  random_id: long,
  data: bytes,
}) => Promise<messages_SentEncryptedMessage>

export type messages_receivedQueue = (name: 'messages.receivedQueue', q: {
  max_qts: int,
}) => Promise<Array<long>>

export type messages_reportEncryptedSpam = (name: 'messages.reportEncryptedSpam', q: {
  peer: InputEncryptedChat,
}) => Promise<Bool>

export type messages_readMessageContents = (name: 'messages.readMessageContents', q: {
  id: Array<int>,
}) => Promise<messages_AffectedMessages>

export type messages_getStickers = (name: 'messages.getStickers', q: {
  emoticon: string,
  hash: int,
}) => Promise<messages_Stickers>

export type messages_getAllStickers = (name: 'messages.getAllStickers', q: {
  hash: int,
}) => Promise<messages_AllStickers>

export type messages_getWebPagePreview = (name: 'messages.getWebPagePreview', q: {
  flags: number,
  message: string,
  entities?: Array<MessageEntity>,
}) => Promise<MessageMedia>

export type messages_exportChatInvite = (name: 'messages.exportChatInvite', q: {
  chat_id: int,
}) => Promise<ExportedChatInvite>

export type messages_checkChatInvite = (name: 'messages.checkChatInvite', q: {
  hash: string,
}) => Promise<ChatInvite>

export type messages_importChatInvite = (name: 'messages.importChatInvite', q: {
  hash: string,
}) => Promise<Updates>

export type messages_getStickerSet = (name: 'messages.getStickerSet', q: {
  stickerset: InputStickerSet,
}) => Promise<messages_StickerSet>

export type messages_installStickerSet = (name: 'messages.installStickerSet', q: {
  stickerset: InputStickerSet,
  archived: Bool,
}) => Promise<messages_StickerSetInstallResult>

export type messages_uninstallStickerSet = (name: 'messages.uninstallStickerSet', q: {
  stickerset: InputStickerSet,
}) => Promise<Bool>

export type messages_startBot = (name: 'messages.startBot', q: {
  bot: InputUser,
  peer: InputPeer,
  random_id: long,
  start_param: string,
}) => Promise<Updates>

export type messages_getMessagesViews = (name: 'messages.getMessagesViews', q: {
  peer: InputPeer,
  id: Array<int>,
  increment: Bool,
}) => Promise<Array<int>>

export type messages_toggleChatAdmins = (name: 'messages.toggleChatAdmins', q: {
  chat_id: int,
  enabled: Bool,
}) => Promise<Updates>

export type messages_editChatAdmin = (name: 'messages.editChatAdmin', q: {
  chat_id: int,
  user_id: InputUser,
  is_admin: Bool,
}) => Promise<Bool>

export type messages_migrateChat = (name: 'messages.migrateChat', q: {
  chat_id: int,
}) => Promise<Updates>

export type messages_searchGlobal = (name: 'messages.searchGlobal', q: {
  q: string,
  offset_date: int,
  offset_peer: InputPeer,
  offset_id: int,
  limit: int,
}) => Promise<messages_Messages>

export type messages_reorderStickerSets = (name: 'messages.reorderStickerSets', q: {
  flags: number,
  masks?: true,
  order: Array<long>,
}) => Promise<Bool>

export type messages_getDocumentByHash = (name: 'messages.getDocumentByHash', q: {
  sha256: bytes,
  size: int,
  mime_type: string,
}) => Promise<Document>

export type messages_searchGifs = (name: 'messages.searchGifs', q: {
  q: string,
  offset: int,
}) => Promise<messages_FoundGifs>

export type messages_getSavedGifs = (name: 'messages.getSavedGifs', q: {
  hash: int,
}) => Promise<messages_SavedGifs>

export type messages_saveGif = (name: 'messages.saveGif', q: {
  id: InputDocument,
  unsave: Bool,
}) => Promise<Bool>

export type messages_getInlineBotResults = (name: 'messages.getInlineBotResults', q: {
  flags: number,
  bot: InputUser,
  peer: InputPeer,
  geo_point?: InputGeoPoint,
  query: string,
  offset: string,
}) => Promise<messages_BotResults>

export type messages_setInlineBotResults = (name: 'messages.setInlineBotResults', q: {
  flags: number,
  gallery?: true,
  private?: true,
  query_id: long,
  results: Array<InputBotInlineResult>,
  cache_time: int,
  next_offset?: string,
  switch_pm?: InlineBotSwitchPM,
}) => Promise<Bool>

export type messages_sendInlineBotResult = (name: 'messages.sendInlineBotResult', q: {
  flags: number,
  silent?: true,
  background?: true,
  clear_draft?: true,
  peer: InputPeer,
  reply_to_msg_id?: int,
  random_id: long,
  query_id: long,
  id: string,
}) => Promise<Updates>

export type messages_getMessageEditData = (name: 'messages.getMessageEditData', q: {
  peer: InputPeer,
  id: int,
}) => Promise<messages_MessageEditData>

export type messages_editMessage = (name: 'messages.editMessage', q: {
  flags: number,
  no_webpage?: true,
  stop_geo_live?: true,
  peer: InputPeer,
  id: int,
  message?: string,
  media?: InputMedia,
  reply_markup?: ReplyMarkup,
  entities?: Array<MessageEntity>,
  geo_point?: InputGeoPoint,
}) => Promise<Updates>

export type messages_editInlineBotMessage = (name: 'messages.editInlineBotMessage', q: {
  flags: number,
  no_webpage?: true,
  stop_geo_live?: true,
  id: InputBotInlineMessageID,
  message?: string,
  media?: InputMedia,
  reply_markup?: ReplyMarkup,
  entities?: Array<MessageEntity>,
  geo_point?: InputGeoPoint,
}) => Promise<Bool>

export type messages_getBotCallbackAnswer = (name: 'messages.getBotCallbackAnswer', q: {
  flags: number,
  game?: true,
  peer: InputPeer,
  msg_id: int,
  data?: bytes,
}) => Promise<messages_BotCallbackAnswer>

export type messages_setBotCallbackAnswer = (name: 'messages.setBotCallbackAnswer', q: {
  flags: number,
  alert?: true,
  query_id: long,
  message?: string,
  url?: string,
  cache_time: int,
}) => Promise<Bool>

export type messages_getPeerDialogs = (name: 'messages.getPeerDialogs', q: {
  peers: Array<InputDialogPeer>,
}) => Promise<messages_PeerDialogs>

export type messages_saveDraft = (name: 'messages.saveDraft', q: {
  flags: number,
  no_webpage?: true,
  reply_to_msg_id?: int,
  peer: InputPeer,
  message: string,
  entities?: Array<MessageEntity>,
}) => Promise<Bool>

export type messages_getAllDrafts = (name: 'messages.getAllDrafts', q: {

}) => Promise<Updates>

export type messages_getFeaturedStickers = (name: 'messages.getFeaturedStickers', q: {
  hash: int,
}) => Promise<messages_FeaturedStickers>

export type messages_readFeaturedStickers = (name: 'messages.readFeaturedStickers', q: {
  id: Array<long>,
}) => Promise<Bool>

export type messages_getRecentStickers = (name: 'messages.getRecentStickers', q: {
  flags: number,
  attached?: true,
  hash: int,
}) => Promise<messages_RecentStickers>

export type messages_saveRecentSticker = (name: 'messages.saveRecentSticker', q: {
  flags: number,
  attached?: true,
  id: InputDocument,
  unsave: Bool,
}) => Promise<Bool>

export type messages_clearRecentStickers = (name: 'messages.clearRecentStickers', q: {
  flags: number,
  attached?: true,
}) => Promise<Bool>

export type messages_getArchivedStickers = (name: 'messages.getArchivedStickers', q: {
  flags: number,
  masks?: true,
  offset_id: long,
  limit: int,
}) => Promise<messages_ArchivedStickers>

export type messages_getMaskStickers = (name: 'messages.getMaskStickers', q: {
  hash: int,
}) => Promise<messages_AllStickers>

export type messages_getAttachedStickers = (name: 'messages.getAttachedStickers', q: {
  media: InputStickeredMedia,
}) => Promise<Array<StickerSetCovered>>

export type messages_setGameScore = (name: 'messages.setGameScore', q: {
  flags: number,
  edit_message?: true,
  force?: true,
  peer: InputPeer,
  id: int,
  user_id: InputUser,
  score: int,
}) => Promise<Updates>

export type messages_setInlineGameScore = (name: 'messages.setInlineGameScore', q: {
  flags: number,
  edit_message?: true,
  force?: true,
  id: InputBotInlineMessageID,
  user_id: InputUser,
  score: int,
}) => Promise<Bool>

export type messages_getGameHighScores = (name: 'messages.getGameHighScores', q: {
  peer: InputPeer,
  id: int,
  user_id: InputUser,
}) => Promise<messages_HighScores>

export type messages_getInlineGameHighScores = (name: 'messages.getInlineGameHighScores', q: {
  id: InputBotInlineMessageID,
  user_id: InputUser,
}) => Promise<messages_HighScores>

export type messages_getCommonChats = (name: 'messages.getCommonChats', q: {
  user_id: InputUser,
  max_id: int,
  limit: int,
}) => Promise<messages_Chats>

export type messages_getAllChats = (name: 'messages.getAllChats', q: {
  except_ids: Array<int>,
}) => Promise<messages_Chats>

export type messages_getWebPage = (name: 'messages.getWebPage', q: {
  url: string,
  hash: int,
}) => Promise<WebPage>

export type messages_toggleDialogPin = (name: 'messages.toggleDialogPin', q: {
  flags: number,
  pinned?: true,
  peer: InputDialogPeer,
}) => Promise<Bool>

export type messages_reorderPinnedDialogs = (name: 'messages.reorderPinnedDialogs', q: {
  flags: number,
  force?: true,
  order: Array<InputDialogPeer>,
}) => Promise<Bool>

export type messages_getPinnedDialogs = (name: 'messages.getPinnedDialogs', q: {

}) => Promise<messages_PeerDialogs>

export type messages_setBotShippingResults = (name: 'messages.setBotShippingResults', q: {
  flags: number,
  query_id: long,
  error?: string,
  shipping_options?: Array<ShippingOption>,
}) => Promise<Bool>

export type messages_setBotPrecheckoutResults = (name: 'messages.setBotPrecheckoutResults', q: {
  flags: number,
  success?: true,
  query_id: long,
  error?: string,
}) => Promise<Bool>

export type messages_uploadMedia = (name: 'messages.uploadMedia', q: {
  peer: InputPeer,
  media: InputMedia,
}) => Promise<MessageMedia>

export type messages_sendScreenshotNotification = (name: 'messages.sendScreenshotNotification', q: {
  peer: InputPeer,
  reply_to_msg_id: int,
  random_id: long,
}) => Promise<Updates>

export type messages_getFavedStickers = (name: 'messages.getFavedStickers', q: {
  hash: int,
}) => Promise<messages_FavedStickers>

export type messages_faveSticker = (name: 'messages.faveSticker', q: {
  id: InputDocument,
  unfave: Bool,
}) => Promise<Bool>

export type messages_getUnreadMentions = (name: 'messages.getUnreadMentions', q: {
  peer: InputPeer,
  offset_id: int,
  add_offset: int,
  limit: int,
  max_id: int,
  min_id: int,
}) => Promise<messages_Messages>

export type messages_readMentions = (name: 'messages.readMentions', q: {
  peer: InputPeer,
}) => Promise<messages_AffectedHistory>

export type messages_getRecentLocations = (name: 'messages.getRecentLocations', q: {
  peer: InputPeer,
  limit: int,
  hash: int,
}) => Promise<messages_Messages>

export type messages_sendMultiMedia = (name: 'messages.sendMultiMedia', q: {
  flags: number,
  silent?: true,
  background?: true,
  clear_draft?: true,
  peer: InputPeer,
  reply_to_msg_id?: int,
  multi_media: Array<InputSingleMedia>,
}) => Promise<Updates>

export type messages_uploadEncryptedFile = (name: 'messages.uploadEncryptedFile', q: {
  peer: InputEncryptedChat,
  file: InputEncryptedFile,
}) => Promise<EncryptedFile>

export type messages_searchStickerSets = (name: 'messages.searchStickerSets', q: {
  flags: number,
  exclude_featured?: true,
  q: string,
  hash: int,
}) => Promise<messages_FoundStickerSets>

export type messages_getSplitRanges = (name: 'messages.getSplitRanges', q: {

}) => Promise<Array<MessageRange>>

export type messages_markDialogUnread = (name: 'messages.markDialogUnread', q: {
  flags: number,
  unread?: true,
  peer: InputDialogPeer,
}) => Promise<Bool>

export type messages_getDialogUnreadMarks = (name: 'messages.getDialogUnreadMarks', q: {

}) => Promise<Array<DialogPeer>>

export type updates_getState = (name: 'updates.getState', q: {

}) => Promise<updates_State>

export type updates_getDifference = (name: 'updates.getDifference', q: {
  flags: number,
  pts: int,
  pts_total_limit?: int,
  date: int,
  qts: int,
}) => Promise<updates_Difference>

export type updates_getChannelDifference = (name: 'updates.getChannelDifference', q: {
  flags: number,
  force?: true,
  channel: InputChannel,
  filter: ChannelMessagesFilter,
  pts: int,
  limit: int,
}) => Promise<updates_ChannelDifference>

export type photos_updateProfilePhoto = (name: 'photos.updateProfilePhoto', q: {
  id: InputPhoto,
}) => Promise<UserProfilePhoto>

export type photos_uploadProfilePhoto = (name: 'photos.uploadProfilePhoto', q: {
  file: InputFile,
}) => Promise<photos_Photo>

export type photos_deletePhotos = (name: 'photos.deletePhotos', q: {
  id: Array<InputPhoto>,
}) => Promise<Array<long>>

export type photos_getUserPhotos = (name: 'photos.getUserPhotos', q: {
  user_id: InputUser,
  offset: int,
  max_id: long,
  limit: int,
}) => Promise<photos_Photos>

export type upload_saveFilePart = (name: 'upload.saveFilePart', q: {
  file_id: long,
  file_part: int,
  bytes: bytes,
}) => Promise<Bool>

export type upload_getFile = (name: 'upload.getFile', q: {
  location: InputFileLocation,
  offset: int,
  limit: int,
}) => Promise<upload_File>

export type upload_saveBigFilePart = (name: 'upload.saveBigFilePart', q: {
  file_id: long,
  file_part: int,
  file_total_parts: int,
  bytes: bytes,
}) => Promise<Bool>

export type upload_getWebFile = (name: 'upload.getWebFile', q: {
  location: InputWebFileLocation,
  offset: int,
  limit: int,
}) => Promise<upload_WebFile>

export type upload_getCdnFile = (name: 'upload.getCdnFile', q: {
  file_token: bytes,
  offset: int,
  limit: int,
}) => Promise<upload_CdnFile>

export type upload_reuploadCdnFile = (name: 'upload.reuploadCdnFile', q: {
  file_token: bytes,
  request_token: bytes,
}) => Promise<Array<FileHash>>

export type upload_getCdnFileHashes = (name: 'upload.getCdnFileHashes', q: {
  file_token: bytes,
  offset: int,
}) => Promise<Array<FileHash>>

export type upload_getFileHashes = (name: 'upload.getFileHashes', q: {
  location: InputFileLocation,
  offset: int,
}) => Promise<Array<FileHash>>

export type help_getConfig = (name: 'help.getConfig', q: {

}) => Promise<Config>

export type help_getNearestDc = (name: 'help.getNearestDc', q: {

}) => Promise<NearestDc>

export type help_getAppUpdate = (name: 'help.getAppUpdate', q: {

}) => Promise<help_AppUpdate>

export type help_saveAppLog = (name: 'help.saveAppLog', q: {
  events: Array<InputAppEvent>,
}) => Promise<Bool>

export type help_getInviteText = (name: 'help.getInviteText', q: {

}) => Promise<help_InviteText>

export type help_getSupport = (name: 'help.getSupport', q: {

}) => Promise<help_Support>

export type help_getAppChangelog = (name: 'help.getAppChangelog', q: {
  prev_app_version: string,
}) => Promise<Updates>

export type help_setBotUpdatesStatus = (name: 'help.setBotUpdatesStatus', q: {
  pending_updates_count: int,
  message: string,
}) => Promise<Bool>

export type help_getCdnConfig = (name: 'help.getCdnConfig', q: {

}) => Promise<CdnConfig>

export type help_getRecentMeUrls = (name: 'help.getRecentMeUrls', q: {
  referer: string,
}) => Promise<help_RecentMeUrls>

export type help_getProxyData = (name: 'help.getProxyData', q: {

}) => Promise<help_ProxyData>

export type help_getTermsOfServiceUpdate = (name: 'help.getTermsOfServiceUpdate', q: {

}) => Promise<help_TermsOfServiceUpdate>

export type help_acceptTermsOfService = (name: 'help.acceptTermsOfService', q: {
  id: DataJSON,
}) => Promise<Bool>

export type help_getDeepLinkInfo = (name: 'help.getDeepLinkInfo', q: {
  path: string,
}) => Promise<help_DeepLinkInfo>

export type channels_readHistory = (name: 'channels.readHistory', q: {
  channel: InputChannel,
  max_id: int,
}) => Promise<Bool>

export type channels_deleteMessages = (name: 'channels.deleteMessages', q: {
  channel: InputChannel,
  id: Array<int>,
}) => Promise<messages_AffectedMessages>

export type channels_deleteUserHistory = (name: 'channels.deleteUserHistory', q: {
  channel: InputChannel,
  user_id: InputUser,
}) => Promise<messages_AffectedHistory>

export type channels_reportSpam = (name: 'channels.reportSpam', q: {
  channel: InputChannel,
  user_id: InputUser,
  id: Array<int>,
}) => Promise<Bool>

export type channels_getMessages = (name: 'channels.getMessages', q: {
  channel: InputChannel,
  id: Array<InputMessage>,
}) => Promise<messages_Messages>

export type channels_getParticipants = (name: 'channels.getParticipants', q: {
  channel: InputChannel,
  filter: ChannelParticipantsFilter,
  offset: int,
  limit: int,
  hash: int,
}) => Promise<channels_ChannelParticipants>

export type channels_getParticipant = (name: 'channels.getParticipant', q: {
  channel: InputChannel,
  user_id: InputUser,
}) => Promise<channels_ChannelParticipant>

export type channels_getChannels = (name: 'channels.getChannels', q: {
  id: Array<InputChannel>,
}) => Promise<messages_Chats>

export type channels_getFullChannel = (name: 'channels.getFullChannel', q: {
  channel: InputChannel,
}) => Promise<messages_ChatFull>

export type channels_createChannel = (name: 'channels.createChannel', q: {
  flags: number,
  broadcast?: true,
  megagroup?: true,
  title: string,
  about: string,
}) => Promise<Updates>

export type channels_editAbout = (name: 'channels.editAbout', q: {
  channel: InputChannel,
  about: string,
}) => Promise<Bool>

export type channels_editAdmin = (name: 'channels.editAdmin', q: {
  channel: InputChannel,
  user_id: InputUser,
  admin_rights: ChannelAdminRights,
}) => Promise<Updates>

export type channels_editTitle = (name: 'channels.editTitle', q: {
  channel: InputChannel,
  title: string,
}) => Promise<Updates>

export type channels_editPhoto = (name: 'channels.editPhoto', q: {
  channel: InputChannel,
  photo: InputChatPhoto,
}) => Promise<Updates>

export type channels_checkUsername = (name: 'channels.checkUsername', q: {
  channel: InputChannel,
  username: string,
}) => Promise<Bool>

export type channels_updateUsername = (name: 'channels.updateUsername', q: {
  channel: InputChannel,
  username: string,
}) => Promise<Bool>

export type channels_joinChannel = (name: 'channels.joinChannel', q: {
  channel: InputChannel,
}) => Promise<Updates>

export type channels_leaveChannel = (name: 'channels.leaveChannel', q: {
  channel: InputChannel,
}) => Promise<Updates>

export type channels_inviteToChannel = (name: 'channels.inviteToChannel', q: {
  channel: InputChannel,
  users: Array<InputUser>,
}) => Promise<Updates>

export type channels_exportInvite = (name: 'channels.exportInvite', q: {
  channel: InputChannel,
}) => Promise<ExportedChatInvite>

export type channels_deleteChannel = (name: 'channels.deleteChannel', q: {
  channel: InputChannel,
}) => Promise<Updates>

export type channels_toggleInvites = (name: 'channels.toggleInvites', q: {
  channel: InputChannel,
  enabled: Bool,
}) => Promise<Updates>

export type channels_exportMessageLink = (name: 'channels.exportMessageLink', q: {
  channel: InputChannel,
  id: int,
  grouped: Bool,
}) => Promise<ExportedMessageLink>

export type channels_toggleSignatures = (name: 'channels.toggleSignatures', q: {
  channel: InputChannel,
  enabled: Bool,
}) => Promise<Updates>

export type channels_updatePinnedMessage = (name: 'channels.updatePinnedMessage', q: {
  flags: number,
  silent?: true,
  channel: InputChannel,
  id: int,
}) => Promise<Updates>

export type channels_getAdminedPublicChannels = (name: 'channels.getAdminedPublicChannels', q: {

}) => Promise<messages_Chats>

export type channels_editBanned = (name: 'channels.editBanned', q: {
  channel: InputChannel,
  user_id: InputUser,
  banned_rights: ChannelBannedRights,
}) => Promise<Updates>

export type channels_getAdminLog = (name: 'channels.getAdminLog', q: {
  flags: number,
  channel: InputChannel,
  q: string,
  events_filter?: ChannelAdminLogEventsFilter,
  admins?: Array<InputUser>,
  max_id: long,
  min_id: long,
  limit: int,
}) => Promise<channels_AdminLogResults>

export type channels_setStickers = (name: 'channels.setStickers', q: {
  channel: InputChannel,
  stickerset: InputStickerSet,
}) => Promise<Bool>

export type channels_readMessageContents = (name: 'channels.readMessageContents', q: {
  channel: InputChannel,
  id: Array<int>,
}) => Promise<Bool>

export type channels_deleteHistory = (name: 'channels.deleteHistory', q: {
  channel: InputChannel,
  max_id: int,
}) => Promise<Bool>

export type channels_togglePreHistoryHidden = (name: 'channels.togglePreHistoryHidden', q: {
  channel: InputChannel,
  enabled: Bool,
}) => Promise<Updates>

export type channels_getLeftChannels = (name: 'channels.getLeftChannels', q: {
  offset: int,
}) => Promise<messages_Chats>

export type bots_sendCustomRequest = (name: 'bots.sendCustomRequest', q: {
  custom_method: string,
  params: DataJSON,
}) => Promise<DataJSON>

export type bots_answerWebhookJSONQuery = (name: 'bots.answerWebhookJSONQuery', q: {
  query_id: long,
  data: DataJSON,
}) => Promise<Bool>

export type payments_getPaymentForm = (name: 'payments.getPaymentForm', q: {
  msg_id: int,
}) => Promise<payments_PaymentForm>

export type payments_getPaymentReceipt = (name: 'payments.getPaymentReceipt', q: {
  msg_id: int,
}) => Promise<payments_PaymentReceipt>

export type payments_validateRequestedInfo = (name: 'payments.validateRequestedInfo', q: {
  flags: number,
  save?: true,
  msg_id: int,
  info: PaymentRequestedInfo,
}) => Promise<payments_ValidatedRequestedInfo>

export type payments_sendPaymentForm = (name: 'payments.sendPaymentForm', q: {
  flags: number,
  msg_id: int,
  requested_info_id?: string,
  shipping_option_id?: string,
  credentials: InputPaymentCredentials,
}) => Promise<payments_PaymentResult>

export type payments_getSavedInfo = (name: 'payments.getSavedInfo', q: {

}) => Promise<payments_SavedInfo>

export type payments_clearSavedInfo = (name: 'payments.clearSavedInfo', q: {
  flags: number,
  credentials?: true,
  info?: true,
}) => Promise<Bool>

export type stickers_createStickerSet = (name: 'stickers.createStickerSet', q: {
  flags: number,
  masks?: true,
  user_id: InputUser,
  title: string,
  short_name: string,
  stickers: Array<InputStickerSetItem>,
}) => Promise<messages_StickerSet>

export type stickers_removeStickerFromSet = (name: 'stickers.removeStickerFromSet', q: {
  sticker: InputDocument,
}) => Promise<messages_StickerSet>

export type stickers_changeStickerPosition = (name: 'stickers.changeStickerPosition', q: {
  sticker: InputDocument,
  position: int,
}) => Promise<messages_StickerSet>

export type stickers_addStickerToSet = (name: 'stickers.addStickerToSet', q: {
  stickerset: InputStickerSet,
  sticker: InputStickerSetItem,
}) => Promise<messages_StickerSet>

export type phone_getCallConfig = (name: 'phone.getCallConfig', q: {

}) => Promise<DataJSON>

export type phone_requestCall = (name: 'phone.requestCall', q: {
  user_id: InputUser,
  random_id: int,
  g_a_hash: bytes,
  protocol: PhoneCallProtocol,
}) => Promise<phone_PhoneCall>

export type phone_acceptCall = (name: 'phone.acceptCall', q: {
  peer: InputPhoneCall,
  g_b: bytes,
  protocol: PhoneCallProtocol,
}) => Promise<phone_PhoneCall>

export type phone_confirmCall = (name: 'phone.confirmCall', q: {
  peer: InputPhoneCall,
  g_a: bytes,
  key_fingerprint: long,
  protocol: PhoneCallProtocol,
}) => Promise<phone_PhoneCall>

export type phone_receivedCall = (name: 'phone.receivedCall', q: {
  peer: InputPhoneCall,
}) => Promise<Bool>

export type phone_discardCall = (name: 'phone.discardCall', q: {
  peer: InputPhoneCall,
  duration: int,
  reason: PhoneCallDiscardReason,
  connection_id: long,
}) => Promise<Updates>

export type phone_setCallRating = (name: 'phone.setCallRating', q: {
  peer: InputPhoneCall,
  rating: int,
  comment: string,
}) => Promise<Updates>

export type phone_saveCallDebug = (name: 'phone.saveCallDebug', q: {
  peer: InputPhoneCall,
  debug: DataJSON,
}) => Promise<Bool>

export type langpack_getLangPack = (name: 'langpack.getLangPack', q: {
  lang_code: string,
}) => Promise<LangPackDifference>

export type langpack_getStrings = (name: 'langpack.getStrings', q: {
  lang_code: string,
  keys: Array<string>,
}) => Promise<Array<LangPackString>>

export type langpack_getDifference = (name: 'langpack.getDifference', q: {
  from_version: int,
}) => Promise<LangPackDifference>

export type langpack_getLanguages = (name: 'langpack.getLanguages', q: {

}) => Promise<Array<LangPackLanguage>>

/// Types ///

export type Int =
  | int

export type Long =
  | long

export type Double =
  | double

export type Bool =
  | boolFalse
  | boolTrue

export type ResPQ =
  | resPQ

export type P_Q_inner_data =
  | p_q_inner_data
  | p_q_inner_data_dc
  | p_q_inner_data_temp
  | p_q_inner_data_temp_dc

export type Server_DH_Params =
  | server_DH_params_fail
  | server_DH_params_ok

export type Server_DH_inner_data =
  | server_DH_inner_data

export type Client_DH_Inner_Data =
  | client_DH_inner_data

export type Set_client_DH_params_answer =
  | dh_gen_ok
  | dh_gen_retry
  | dh_gen_fail

export type DestroyAuthKeyRes =
  | destroy_auth_key_ok
  | destroy_auth_key_none
  | destroy_auth_key_fail

export type MsgsAck =
  | msgs_ack

export type BadMsgNotification =
  | bad_msg_notification
  | bad_server_salt

export type MsgsStateReq =
  | msgs_state_req

export type MsgsStateInfo =
  | msgs_state_info

export type MsgsAllInfo =
  | msgs_all_info

export type MsgDetailedInfo =
  | msg_detailed_info
  | msg_new_detailed_info

export type MsgResendReq =
  | msg_resend_req

export type RpcError =
  | rpc_error

export type RpcDropAnswer =
  | rpc_answer_unknown
  | rpc_answer_dropped_running
  | rpc_answer_dropped

export type FutureSalt =
  | future_salt

export type FutureSalts =
  | future_salts

export type Pong =
  | pong

export type DestroySessionRes =
  | destroy_session_ok
  | destroy_session_none

export type NewSession =
  | new_session_created

export type HttpWait =
  | http_wait

export type IpPort =
  | ipPort
  | ipPortSecret

export type AccessPointRule =
  | accessPointRule

export type help_ConfigSimple =
  | help_configSimple

export type Error =
  | error

export type InputPeer =
  | inputPeerEmpty
  | inputPeerSelf
  | inputPeerChat
  | inputPeerUser
  | inputPeerChannel

export type InputUser =
  | inputUserEmpty
  | inputUserSelf
  | inputUser

export type InputContact =
  | inputPhoneContact

export type InputFile =
  | inputFile
  | inputFileBig

export type InputMedia =
  | inputMediaEmpty
  | inputMediaUploadedPhoto
  | inputMediaPhoto
  | inputMediaGeoPoint
  | inputMediaContact
  | inputMediaUploadedDocument
  | inputMediaDocument
  | inputMediaVenue
  | inputMediaGifExternal
  | inputMediaPhotoExternal
  | inputMediaDocumentExternal
  | inputMediaGame
  | inputMediaInvoice
  | inputMediaGeoLive

export type InputChatPhoto =
  | inputChatPhotoEmpty
  | inputChatUploadedPhoto
  | inputChatPhoto

export type InputGeoPoint =
  | inputGeoPointEmpty
  | inputGeoPoint

export type InputPhoto =
  | inputPhotoEmpty
  | inputPhoto

export type InputFileLocation =
  | inputFileLocation
  | inputEncryptedFileLocation
  | inputDocumentFileLocation
  | inputSecureFileLocation
  | inputTakeoutFileLocation

export type InputAppEvent =
  | inputAppEvent

export type Peer =
  | peerUser
  | peerChat
  | peerChannel

export type storage_FileType =
  | storage_fileUnknown
  | storage_filePartial
  | storage_fileJpeg
  | storage_fileGif
  | storage_filePng
  | storage_filePdf
  | storage_fileMp3
  | storage_fileMov
  | storage_fileMp4
  | storage_fileWebp

export type FileLocation =
  | fileLocationUnavailable
  | fileLocation

export type User =
  | userEmpty
  | user

export type UserProfilePhoto =
  | userProfilePhotoEmpty
  | userProfilePhoto

export type UserStatus =
  | userStatusEmpty
  | userStatusOnline
  | userStatusOffline
  | userStatusRecently
  | userStatusLastWeek
  | userStatusLastMonth

export type Chat =
  | chatEmpty
  | chat
  | chatForbidden
  | channel
  | channelForbidden

export type ChatFull =
  | chatFull
  | channelFull

export type ChatParticipant =
  | chatParticipant
  | chatParticipantCreator
  | chatParticipantAdmin

export type ChatParticipants =
  | chatParticipantsForbidden
  | chatParticipants

export type ChatPhoto =
  | chatPhotoEmpty
  | chatPhoto

export type Message =
  | messageEmpty
  | message
  | messageService

export type MessageMedia =
  | messageMediaEmpty
  | messageMediaPhoto
  | messageMediaGeo
  | messageMediaContact
  | messageMediaUnsupported
  | messageMediaDocument
  | messageMediaWebPage
  | messageMediaVenue
  | messageMediaGame
  | messageMediaInvoice
  | messageMediaGeoLive

export type MessageAction =
  | messageActionEmpty
  | messageActionChatCreate
  | messageActionChatEditTitle
  | messageActionChatEditPhoto
  | messageActionChatDeletePhoto
  | messageActionChatAddUser
  | messageActionChatDeleteUser
  | messageActionChatJoinedByLink
  | messageActionChannelCreate
  | messageActionChatMigrateTo
  | messageActionChannelMigrateFrom
  | messageActionPinMessage
  | messageActionHistoryClear
  | messageActionGameScore
  | messageActionPaymentSentMe
  | messageActionPaymentSent
  | messageActionPhoneCall
  | messageActionScreenshotTaken
  | messageActionCustomAction
  | messageActionBotAllowed
  | messageActionSecureValuesSentMe
  | messageActionSecureValuesSent

export type Dialog =
  | dialog

export type Photo =
  | photoEmpty
  | photo

export type PhotoSize =
  | photoSizeEmpty
  | photoSize
  | photoCachedSize

export type GeoPoint =
  | geoPointEmpty
  | geoPoint

export type auth_CheckedPhone =
  | auth_checkedPhone

export type auth_SentCode =
  | auth_sentCode

export type auth_Authorization =
  | auth_authorization

export type auth_ExportedAuthorization =
  | auth_exportedAuthorization

export type InputNotifyPeer =
  | inputNotifyPeer
  | inputNotifyUsers
  | inputNotifyChats

export type InputPeerNotifySettings =
  | inputPeerNotifySettings

export type PeerNotifySettings =
  | peerNotifySettings

export type PeerSettings =
  | peerSettings

export type WallPaper =
  | wallPaper
  | wallPaperSolid

export type ReportReason =
  | inputReportReasonSpam
  | inputReportReasonViolence
  | inputReportReasonPornography
  | inputReportReasonOther

export type UserFull =
  | userFull

export type Contact =
  | contact

export type ImportedContact =
  | importedContact

export type ContactBlocked =
  | contactBlocked

export type ContactStatus =
  | contactStatus

export type contacts_Link =
  | contacts_link

export type contacts_Contacts =
  | contacts_contactsNotModified
  | contacts_contacts

export type contacts_ImportedContacts =
  | contacts_importedContacts

export type contacts_Blocked =
  | contacts_blocked
  | contacts_blockedSlice

export type messages_Dialogs =
  | messages_dialogs
  | messages_dialogsSlice
  | messages_dialogsNotModified

export type messages_Messages =
  | messages_messages
  | messages_messagesSlice
  | messages_channelMessages
  | messages_messagesNotModified

export type messages_Chats =
  | messages_chats
  | messages_chatsSlice

export type messages_ChatFull =
  | messages_chatFull

export type messages_AffectedHistory =
  | messages_affectedHistory

export type MessagesFilter =
  | inputMessagesFilterEmpty
  | inputMessagesFilterPhotos
  | inputMessagesFilterVideo
  | inputMessagesFilterPhotoVideo
  | inputMessagesFilterDocument
  | inputMessagesFilterUrl
  | inputMessagesFilterGif
  | inputMessagesFilterVoice
  | inputMessagesFilterMusic
  | inputMessagesFilterChatPhotos
  | inputMessagesFilterPhoneCalls
  | inputMessagesFilterRoundVoice
  | inputMessagesFilterRoundVideo
  | inputMessagesFilterMyMentions
  | inputMessagesFilterGeo
  | inputMessagesFilterContacts

export type Update =
  | updateNewMessage
  | updateMessageID
  | updateDeleteMessages
  | updateUserTyping
  | updateChatUserTyping
  | updateChatParticipants
  | updateUserStatus
  | updateUserName
  | updateUserPhoto
  | updateContactRegistered
  | updateContactLink
  | updateNewEncryptedMessage
  | updateEncryptedChatTyping
  | updateEncryption
  | updateEncryptedMessagesRead
  | updateChatParticipantAdd
  | updateChatParticipantDelete
  | updateDcOptions
  | updateUserBlocked
  | updateNotifySettings
  | updateServiceNotification
  | updatePrivacy
  | updateUserPhone
  | updateReadHistoryInbox
  | updateReadHistoryOutbox
  | updateWebPage
  | updateReadMessagesContents
  | updateChannelTooLong
  | updateChannel
  | updateNewChannelMessage
  | updateReadChannelInbox
  | updateDeleteChannelMessages
  | updateChannelMessageViews
  | updateChatAdmins
  | updateChatParticipantAdmin
  | updateNewStickerSet
  | updateStickerSetsOrder
  | updateStickerSets
  | updateSavedGifs
  | updateBotInlineQuery
  | updateBotInlineSend
  | updateEditChannelMessage
  | updateChannelPinnedMessage
  | updateBotCallbackQuery
  | updateEditMessage
  | updateInlineBotCallbackQuery
  | updateReadChannelOutbox
  | updateDraftMessage
  | updateReadFeaturedStickers
  | updateRecentStickers
  | updateConfig
  | updatePtsChanged
  | updateChannelWebPage
  | updateDialogPinned
  | updatePinnedDialogs
  | updateBotWebhookJSON
  | updateBotWebhookJSONQuery
  | updateBotShippingQuery
  | updateBotPrecheckoutQuery
  | updatePhoneCall
  | updateLangPackTooLong
  | updateLangPack
  | updateFavedStickers
  | updateChannelReadMessagesContents
  | updateContactsReset
  | updateChannelAvailableMessages
  | updateDialogUnreadMark

export type updates_State =
  | updates_state

export type updates_Difference =
  | updates_differenceEmpty
  | updates_difference
  | updates_differenceSlice
  | updates_differenceTooLong

export type Updates =
  | updatesTooLong
  | updateShortMessage
  | updateShortChatMessage
  | updateShort
  | updatesCombined
  | updates
  | updateShortSentMessage

export type photos_Photos =
  | photos_photos
  | photos_photosSlice

export type photos_Photo =
  | photos_photo

export type upload_File =
  | upload_file
  | upload_fileCdnRedirect

export type DcOption =
  | dcOption

export type Config =
  | config

export type NearestDc =
  | nearestDc

export type help_AppUpdate =
  | help_appUpdate
  | help_noAppUpdate

export type help_InviteText =
  | help_inviteText

export type EncryptedChat =
  | encryptedChatEmpty
  | encryptedChatWaiting
  | encryptedChatRequested
  | encryptedChat
  | encryptedChatDiscarded

export type InputEncryptedChat =
  | inputEncryptedChat

export type EncryptedFile =
  | encryptedFileEmpty
  | encryptedFile

export type InputEncryptedFile =
  | inputEncryptedFileEmpty
  | inputEncryptedFileUploaded
  | inputEncryptedFile
  | inputEncryptedFileBigUploaded

export type EncryptedMessage =
  | encryptedMessage
  | encryptedMessageService

export type messages_DhConfig =
  | messages_dhConfigNotModified
  | messages_dhConfig

export type messages_SentEncryptedMessage =
  | messages_sentEncryptedMessage
  | messages_sentEncryptedFile

export type InputDocument =
  | inputDocumentEmpty
  | inputDocument

export type Document =
  | documentEmpty
  | document

export type help_Support =
  | help_support

export type NotifyPeer =
  | notifyPeer
  | notifyUsers
  | notifyChats

export type SendMessageAction =
  | sendMessageTypingAction
  | sendMessageCancelAction
  | sendMessageRecordVideoAction
  | sendMessageUploadVideoAction
  | sendMessageRecordAudioAction
  | sendMessageUploadAudioAction
  | sendMessageUploadPhotoAction
  | sendMessageUploadDocumentAction
  | sendMessageGeoLocationAction
  | sendMessageChooseContactAction
  | sendMessageGamePlayAction
  | sendMessageRecordRoundAction
  | sendMessageUploadRoundAction

export type contacts_Found =
  | contacts_found

export type InputPrivacyKey =
  | inputPrivacyKeyStatusTimestamp
  | inputPrivacyKeyChatInvite
  | inputPrivacyKeyPhoneCall

export type PrivacyKey =
  | privacyKeyStatusTimestamp
  | privacyKeyChatInvite
  | privacyKeyPhoneCall

export type InputPrivacyRule =
  | inputPrivacyValueAllowContacts
  | inputPrivacyValueAllowAll
  | inputPrivacyValueAllowUsers
  | inputPrivacyValueDisallowContacts
  | inputPrivacyValueDisallowAll
  | inputPrivacyValueDisallowUsers

export type PrivacyRule =
  | privacyValueAllowContacts
  | privacyValueAllowAll
  | privacyValueAllowUsers
  | privacyValueDisallowContacts
  | privacyValueDisallowAll
  | privacyValueDisallowUsers

export type account_PrivacyRules =
  | account_privacyRules

export type AccountDaysTTL =
  | accountDaysTTL

export type DocumentAttribute =
  | documentAttributeImageSize
  | documentAttributeAnimated
  | documentAttributeSticker
  | documentAttributeVideo
  | documentAttributeAudio
  | documentAttributeFilename
  | documentAttributeHasStickers

export type messages_Stickers =
  | messages_stickersNotModified
  | messages_stickers

export type StickerPack =
  | stickerPack

export type messages_AllStickers =
  | messages_allStickersNotModified
  | messages_allStickers

export type messages_AffectedMessages =
  | messages_affectedMessages

export type ContactLink =
  | contactLinkUnknown
  | contactLinkNone
  | contactLinkHasPhone
  | contactLinkContact

export type WebPage =
  | webPageEmpty
  | webPagePending
  | webPage
  | webPageNotModified

export type Authorization =
  | authorization

export type account_Authorizations =
  | account_authorizations

export type account_Password =
  | account_noPassword
  | account_password

export type account_PasswordSettings =
  | account_passwordSettings

export type account_PasswordInputSettings =
  | account_passwordInputSettings

export type auth_PasswordRecovery =
  | auth_passwordRecovery

export type ReceivedNotifyMessage =
  | receivedNotifyMessage

export type ExportedChatInvite =
  | chatInviteEmpty
  | chatInviteExported

export type ChatInvite =
  | chatInviteAlready
  | chatInvite

export type InputStickerSet =
  | inputStickerSetEmpty
  | inputStickerSetID
  | inputStickerSetShortName

export type StickerSet =
  | stickerSet

export type messages_StickerSet =
  | messages_stickerSet

export type BotCommand =
  | botCommand

export type BotInfo =
  | botInfo

export type KeyboardButton =
  | keyboardButton
  | keyboardButtonUrl
  | keyboardButtonCallback
  | keyboardButtonRequestPhone
  | keyboardButtonRequestGeoLocation
  | keyboardButtonSwitchInline
  | keyboardButtonGame
  | keyboardButtonBuy

export type KeyboardButtonRow =
  | keyboardButtonRow

export type ReplyMarkup =
  | replyKeyboardHide
  | replyKeyboardForceReply
  | replyKeyboardMarkup
  | replyInlineMarkup

export type MessageEntity =
  | messageEntityUnknown
  | messageEntityMention
  | messageEntityHashtag
  | messageEntityBotCommand
  | messageEntityUrl
  | messageEntityEmail
  | messageEntityBold
  | messageEntityItalic
  | messageEntityCode
  | messageEntityPre
  | messageEntityTextUrl
  | messageEntityMentionName
  | inputMessageEntityMentionName
  | messageEntityPhone
  | messageEntityCashtag

export type InputChannel =
  | inputChannelEmpty
  | inputChannel

export type contacts_ResolvedPeer =
  | contacts_resolvedPeer

export type MessageRange =
  | messageRange

export type updates_ChannelDifference =
  | updates_channelDifferenceEmpty
  | updates_channelDifferenceTooLong
  | updates_channelDifference

export type ChannelMessagesFilter =
  | channelMessagesFilterEmpty
  | channelMessagesFilter

export type ChannelParticipant =
  | channelParticipant
  | channelParticipantSelf
  | channelParticipantCreator
  | channelParticipantAdmin
  | channelParticipantBanned

export type ChannelParticipantsFilter =
  | channelParticipantsRecent
  | channelParticipantsAdmins
  | channelParticipantsKicked
  | channelParticipantsBots
  | channelParticipantsBanned
  | channelParticipantsSearch

export type channels_ChannelParticipants =
  | channels_channelParticipants
  | channels_channelParticipantsNotModified

export type channels_ChannelParticipant =
  | channels_channelParticipant

export type help_TermsOfService =
  | help_termsOfService

export type FoundGif =
  | foundGif
  | foundGifCached

export type messages_FoundGifs =
  | messages_foundGifs

export type messages_SavedGifs =
  | messages_savedGifsNotModified
  | messages_savedGifs

export type InputBotInlineMessage =
  | inputBotInlineMessageMediaAuto
  | inputBotInlineMessageText
  | inputBotInlineMessageMediaGeo
  | inputBotInlineMessageMediaVenue
  | inputBotInlineMessageMediaContact
  | inputBotInlineMessageGame

export type InputBotInlineResult =
  | inputBotInlineResult
  | inputBotInlineResultPhoto
  | inputBotInlineResultDocument
  | inputBotInlineResultGame

export type BotInlineMessage =
  | botInlineMessageMediaAuto
  | botInlineMessageText
  | botInlineMessageMediaGeo
  | botInlineMessageMediaVenue
  | botInlineMessageMediaContact

export type BotInlineResult =
  | botInlineResult
  | botInlineMediaResult

export type messages_BotResults =
  | messages_botResults

export type ExportedMessageLink =
  | exportedMessageLink

export type MessageFwdHeader =
  | messageFwdHeader

export type auth_CodeType =
  | auth_codeTypeSms
  | auth_codeTypeCall
  | auth_codeTypeFlashCall

export type auth_SentCodeType =
  | auth_sentCodeTypeApp
  | auth_sentCodeTypeSms
  | auth_sentCodeTypeCall
  | auth_sentCodeTypeFlashCall

export type messages_BotCallbackAnswer =
  | messages_botCallbackAnswer

export type messages_MessageEditData =
  | messages_messageEditData

export type InputBotInlineMessageID =
  | inputBotInlineMessageID

export type InlineBotSwitchPM =
  | inlineBotSwitchPM

export type messages_PeerDialogs =
  | messages_peerDialogs

export type TopPeer =
  | topPeer

export type TopPeerCategory =
  | topPeerCategoryBotsPM
  | topPeerCategoryBotsInline
  | topPeerCategoryCorrespondents
  | topPeerCategoryGroups
  | topPeerCategoryChannels
  | topPeerCategoryPhoneCalls

export type TopPeerCategoryPeers =
  | topPeerCategoryPeers

export type contacts_TopPeers =
  | contacts_topPeersNotModified
  | contacts_topPeers
  | contacts_topPeersDisabled

export type DraftMessage =
  | draftMessageEmpty
  | draftMessage

export type messages_FeaturedStickers =
  | messages_featuredStickersNotModified
  | messages_featuredStickers

export type messages_RecentStickers =
  | messages_recentStickersNotModified
  | messages_recentStickers

export type messages_ArchivedStickers =
  | messages_archivedStickers

export type messages_StickerSetInstallResult =
  | messages_stickerSetInstallResultSuccess
  | messages_stickerSetInstallResultArchive

export type StickerSetCovered =
  | stickerSetCovered
  | stickerSetMultiCovered

export type MaskCoords =
  | maskCoords

export type InputStickeredMedia =
  | inputStickeredMediaPhoto
  | inputStickeredMediaDocument

export type Game =
  | game

export type InputGame =
  | inputGameID
  | inputGameShortName

export type HighScore =
  | highScore

export type messages_HighScores =
  | messages_highScores

export type RichText =
  | textEmpty
  | textPlain
  | textBold
  | textItalic
  | textUnderline
  | textStrike
  | textFixed
  | textUrl
  | textEmail
  | textConcat

export type PageBlock =
  | pageBlockUnsupported
  | pageBlockTitle
  | pageBlockSubtitle
  | pageBlockAuthorDate
  | pageBlockHeader
  | pageBlockSubheader
  | pageBlockParagraph
  | pageBlockPreformatted
  | pageBlockFooter
  | pageBlockDivider
  | pageBlockAnchor
  | pageBlockList
  | pageBlockBlockquote
  | pageBlockPullquote
  | pageBlockPhoto
  | pageBlockVideo
  | pageBlockCover
  | pageBlockEmbed
  | pageBlockEmbedPost
  | pageBlockCollage
  | pageBlockSlideshow
  | pageBlockChannel
  | pageBlockAudio

export type Page =
  | pagePart
  | pageFull

export type PhoneCallDiscardReason =
  | phoneCallDiscardReasonMissed
  | phoneCallDiscardReasonDisconnect
  | phoneCallDiscardReasonHangup
  | phoneCallDiscardReasonBusy

export type DataJSON =
  | dataJSON

export type LabeledPrice =
  | labeledPrice

export type Invoice =
  | invoice

export type PaymentCharge =
  | paymentCharge

export type PostAddress =
  | postAddress

export type PaymentRequestedInfo =
  | paymentRequestedInfo

export type PaymentSavedCredentials =
  | paymentSavedCredentialsCard

export type WebDocument =
  | webDocument
  | webDocumentNoProxy

export type InputWebDocument =
  | inputWebDocument

export type InputWebFileLocation =
  | inputWebFileLocation
  | inputWebFileGeoPointLocation

export type upload_WebFile =
  | upload_webFile

export type payments_PaymentForm =
  | payments_paymentForm

export type payments_ValidatedRequestedInfo =
  | payments_validatedRequestedInfo

export type payments_PaymentResult =
  | payments_paymentResult
  | payments_paymentVerficationNeeded

export type payments_PaymentReceipt =
  | payments_paymentReceipt

export type payments_SavedInfo =
  | payments_savedInfo

export type InputPaymentCredentials =
  | inputPaymentCredentialsSaved
  | inputPaymentCredentials
  | inputPaymentCredentialsApplePay
  | inputPaymentCredentialsAndroidPay

export type account_TmpPassword =
  | account_tmpPassword

export type ShippingOption =
  | shippingOption

export type InputStickerSetItem =
  | inputStickerSetItem

export type InputPhoneCall =
  | inputPhoneCall

export type PhoneCall =
  | phoneCallEmpty
  | phoneCallWaiting
  | phoneCallRequested
  | phoneCallAccepted
  | phoneCall
  | phoneCallDiscarded

export type PhoneConnection =
  | phoneConnection

export type PhoneCallProtocol =
  | phoneCallProtocol

export type phone_PhoneCall =
  | phone_phoneCall

export type upload_CdnFile =
  | upload_cdnFileReuploadNeeded
  | upload_cdnFile

export type CdnPublicKey =
  | cdnPublicKey

export type CdnConfig =
  | cdnConfig

export type LangPackString =
  | langPackString
  | langPackStringPluralized
  | langPackStringDeleted

export type LangPackDifference =
  | langPackDifference

export type LangPackLanguage =
  | langPackLanguage

export type ChannelAdminRights =
  | channelAdminRights

export type ChannelBannedRights =
  | channelBannedRights

export type ChannelAdminLogEventAction =
  | channelAdminLogEventActionChangeTitle
  | channelAdminLogEventActionChangeAbout
  | channelAdminLogEventActionChangeUsername
  | channelAdminLogEventActionChangePhoto
  | channelAdminLogEventActionToggleInvites
  | channelAdminLogEventActionToggleSignatures
  | channelAdminLogEventActionUpdatePinned
  | channelAdminLogEventActionEditMessage
  | channelAdminLogEventActionDeleteMessage
  | channelAdminLogEventActionParticipantJoin
  | channelAdminLogEventActionParticipantLeave
  | channelAdminLogEventActionParticipantInvite
  | channelAdminLogEventActionParticipantToggleBan
  | channelAdminLogEventActionParticipantToggleAdmin
  | channelAdminLogEventActionChangeStickerSet
  | channelAdminLogEventActionTogglePreHistoryHidden

export type ChannelAdminLogEvent =
  | channelAdminLogEvent

export type channels_AdminLogResults =
  | channels_adminLogResults

export type ChannelAdminLogEventsFilter =
  | channelAdminLogEventsFilter

export type PopularContact =
  | popularContact

export type messages_FavedStickers =
  | messages_favedStickersNotModified
  | messages_favedStickers

export type RecentMeUrl =
  | recentMeUrlUnknown
  | recentMeUrlUser
  | recentMeUrlChat
  | recentMeUrlChatInvite
  | recentMeUrlStickerSet

export type help_RecentMeUrls =
  | help_recentMeUrls

export type InputSingleMedia =
  | inputSingleMedia

export type WebAuthorization =
  | webAuthorization

export type account_WebAuthorizations =
  | account_webAuthorizations

export type InputMessage =
  | inputMessageID
  | inputMessageReplyTo
  | inputMessagePinned

export type InputDialogPeer =
  | inputDialogPeer

export type DialogPeer =
  | dialogPeer

export type messages_FoundStickerSets =
  | messages_foundStickerSetsNotModified
  | messages_foundStickerSets

export type FileHash =
  | fileHash

export type InputClientProxy =
  | inputClientProxy

export type help_ProxyData =
  | help_proxyDataEmpty
  | help_proxyDataPromo

export type help_TermsOfServiceUpdate =
  | help_termsOfServiceUpdateEmpty
  | help_termsOfServiceUpdate

export type InputSecureFile =
  | inputSecureFileUploaded
  | inputSecureFile

export type SecureFile =
  | secureFileEmpty
  | secureFile

export type SecureData =
  | secureData

export type SecurePlainData =
  | securePlainPhone
  | securePlainEmail

export type SecureValueType =
  | secureValueTypePersonalDetails
  | secureValueTypePassport
  | secureValueTypeDriverLicense
  | secureValueTypeIdentityCard
  | secureValueTypeInternalPassport
  | secureValueTypeAddress
  | secureValueTypeUtilityBill
  | secureValueTypeBankStatement
  | secureValueTypeRentalAgreement
  | secureValueTypePassportRegistration
  | secureValueTypeTemporaryRegistration
  | secureValueTypePhone
  | secureValueTypeEmail

export type SecureValue =
  | secureValue

export type InputSecureValue =
  | inputSecureValue

export type SecureValueHash =
  | secureValueHash

export type SecureValueError =
  | secureValueErrorData
  | secureValueErrorFrontSide
  | secureValueErrorReverseSide
  | secureValueErrorSelfie
  | secureValueErrorFile
  | secureValueErrorFiles

export type SecureCredentialsEncrypted =
  | secureCredentialsEncrypted

export type account_AuthorizationForm =
  | account_authorizationForm

export type account_SentEmailCode =
  | account_sentEmailCode

export type help_DeepLinkInfo =
  | help_deepLinkInfoEmpty
  | help_deepLinkInfo

export type SavedContact =
  | savedPhoneContact

export type account_Takeout =
  | account_takeout

/// Invoke ///

export type Invoke =
  & req_pq
  & req_pq_multi
  & req_DH_params
  & set_client_DH_params
  & destroy_auth_key
  & rpc_drop_answer
  & get_future_salts
  & ping
  & ping_delay_disconnect
  & destroy_session
  & contest_saveDeveloperInfo
  & invokeAfterMsg
  & invokeAfterMsgs
  & initConnection
  & invokeWithLayer
  & invokeWithoutUpdates
  & invokeWithMessagesRange
  & invokeWithTakeout
  & auth_sendCode
  & auth_signUp
  & auth_signIn
  & auth_logOut
  & auth_resetAuthorizations
  & auth_exportAuthorization
  & auth_importAuthorization
  & auth_bindTempAuthKey
  & auth_importBotAuthorization
  & auth_checkPassword
  & auth_requestPasswordRecovery
  & auth_recoverPassword
  & auth_resendCode
  & auth_cancelCode
  & auth_dropTempAuthKeys
  & account_registerDevice
  & account_unregisterDevice
  & account_updateNotifySettings
  & account_getNotifySettings
  & account_resetNotifySettings
  & account_updateProfile
  & account_updateStatus
  & account_getWallPapers
  & account_reportPeer
  & account_checkUsername
  & account_updateUsername
  & account_getPrivacy
  & account_setPrivacy
  & account_deleteAccount
  & account_getAccountTTL
  & account_setAccountTTL
  & account_sendChangePhoneCode
  & account_changePhone
  & account_updateDeviceLocked
  & account_getAuthorizations
  & account_resetAuthorization
  & account_getPassword
  & account_getPasswordSettings
  & account_updatePasswordSettings
  & account_sendConfirmPhoneCode
  & account_confirmPhone
  & account_getTmpPassword
  & account_getWebAuthorizations
  & account_resetWebAuthorization
  & account_resetWebAuthorizations
  & account_getAllSecureValues
  & account_getSecureValue
  & account_saveSecureValue
  & account_deleteSecureValue
  & account_getAuthorizationForm
  & account_acceptAuthorization
  & account_sendVerifyPhoneCode
  & account_verifyPhone
  & account_sendVerifyEmailCode
  & account_verifyEmail
  & account_initTakeoutSession
  & account_finishTakeoutSession
  & users_getUsers
  & users_getFullUser
  & users_setSecureValueErrors
  & contacts_getStatuses
  & contacts_getContacts
  & contacts_importContacts
  & contacts_deleteContact
  & contacts_deleteContacts
  & contacts_block
  & contacts_unblock
  & contacts_getBlocked
  & contacts_exportCard
  & contacts_importCard
  & contacts_search
  & contacts_resolveUsername
  & contacts_getTopPeers
  & contacts_resetTopPeerRating
  & contacts_resetSaved
  & contacts_getSaved
  & contacts_toggleTopPeers
  & messages_getMessages
  & messages_getDialogs
  & messages_getHistory
  & messages_search
  & messages_readHistory
  & messages_deleteHistory
  & messages_deleteMessages
  & messages_receivedMessages
  & messages_setTyping
  & messages_sendMessage
  & messages_sendMedia
  & messages_forwardMessages
  & messages_reportSpam
  & messages_hideReportSpam
  & messages_getPeerSettings
  & messages_report
  & messages_getChats
  & messages_getFullChat
  & messages_editChatTitle
  & messages_editChatPhoto
  & messages_addChatUser
  & messages_deleteChatUser
  & messages_createChat
  & messages_getDhConfig
  & messages_requestEncryption
  & messages_acceptEncryption
  & messages_discardEncryption
  & messages_setEncryptedTyping
  & messages_readEncryptedHistory
  & messages_sendEncrypted
  & messages_sendEncryptedFile
  & messages_sendEncryptedService
  & messages_receivedQueue
  & messages_reportEncryptedSpam
  & messages_readMessageContents
  & messages_getStickers
  & messages_getAllStickers
  & messages_getWebPagePreview
  & messages_exportChatInvite
  & messages_checkChatInvite
  & messages_importChatInvite
  & messages_getStickerSet
  & messages_installStickerSet
  & messages_uninstallStickerSet
  & messages_startBot
  & messages_getMessagesViews
  & messages_toggleChatAdmins
  & messages_editChatAdmin
  & messages_migrateChat
  & messages_searchGlobal
  & messages_reorderStickerSets
  & messages_getDocumentByHash
  & messages_searchGifs
  & messages_getSavedGifs
  & messages_saveGif
  & messages_getInlineBotResults
  & messages_setInlineBotResults
  & messages_sendInlineBotResult
  & messages_getMessageEditData
  & messages_editMessage
  & messages_editInlineBotMessage
  & messages_getBotCallbackAnswer
  & messages_setBotCallbackAnswer
  & messages_getPeerDialogs
  & messages_saveDraft
  & messages_getAllDrafts
  & messages_getFeaturedStickers
  & messages_readFeaturedStickers
  & messages_getRecentStickers
  & messages_saveRecentSticker
  & messages_clearRecentStickers
  & messages_getArchivedStickers
  & messages_getMaskStickers
  & messages_getAttachedStickers
  & messages_setGameScore
  & messages_setInlineGameScore
  & messages_getGameHighScores
  & messages_getInlineGameHighScores
  & messages_getCommonChats
  & messages_getAllChats
  & messages_getWebPage
  & messages_toggleDialogPin
  & messages_reorderPinnedDialogs
  & messages_getPinnedDialogs
  & messages_setBotShippingResults
  & messages_setBotPrecheckoutResults
  & messages_uploadMedia
  & messages_sendScreenshotNotification
  & messages_getFavedStickers
  & messages_faveSticker
  & messages_getUnreadMentions
  & messages_readMentions
  & messages_getRecentLocations
  & messages_sendMultiMedia
  & messages_uploadEncryptedFile
  & messages_searchStickerSets
  & messages_getSplitRanges
  & messages_markDialogUnread
  & messages_getDialogUnreadMarks
  & updates_getState
  & updates_getDifference
  & updates_getChannelDifference
  & photos_updateProfilePhoto
  & photos_uploadProfilePhoto
  & photos_deletePhotos
  & photos_getUserPhotos
  & upload_saveFilePart
  & upload_getFile
  & upload_saveBigFilePart
  & upload_getWebFile
  & upload_getCdnFile
  & upload_reuploadCdnFile
  & upload_getCdnFileHashes
  & upload_getFileHashes
  & help_getConfig
  & help_getNearestDc
  & help_getAppUpdate
  & help_saveAppLog
  & help_getInviteText
  & help_getSupport
  & help_getAppChangelog
  & help_setBotUpdatesStatus
  & help_getCdnConfig
  & help_getRecentMeUrls
  & help_getProxyData
  & help_getTermsOfServiceUpdate
  & help_acceptTermsOfService
  & help_getDeepLinkInfo
  & channels_readHistory
  & channels_deleteMessages
  & channels_deleteUserHistory
  & channels_reportSpam
  & channels_getMessages
  & channels_getParticipants
  & channels_getParticipant
  & channels_getChannels
  & channels_getFullChannel
  & channels_createChannel
  & channels_editAbout
  & channels_editAdmin
  & channels_editTitle
  & channels_editPhoto
  & channels_checkUsername
  & channels_updateUsername
  & channels_joinChannel
  & channels_leaveChannel
  & channels_inviteToChannel
  & channels_exportInvite
  & channels_deleteChannel
  & channels_toggleInvites
  & channels_exportMessageLink
  & channels_toggleSignatures
  & channels_updatePinnedMessage
  & channels_getAdminedPublicChannels
  & channels_editBanned
  & channels_getAdminLog
  & channels_setStickers
  & channels_readMessageContents
  & channels_deleteHistory
  & channels_togglePreHistoryHidden
  & channels_getLeftChannels
  & bots_sendCustomRequest
  & bots_answerWebhookJSONQuery
  & payments_getPaymentForm
  & payments_getPaymentReceipt
  & payments_validateRequestedInfo
  & payments_sendPaymentForm
  & payments_getSavedInfo
  & payments_clearSavedInfo
  & stickers_createStickerSet
  & stickers_removeStickerFromSet
  & stickers_changeStickerPosition
  & stickers_addStickerToSet
  & phone_getCallConfig
  & phone_requestCall
  & phone_acceptCall
  & phone_confirmCall
  & phone_receivedCall
  & phone_discardCall
  & phone_setCallRating
  & phone_saveCallDebug
  & langpack_getLangPack
  & langpack_getStrings
  & langpack_getDifference
  & langpack_getLanguages
