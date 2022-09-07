---types---
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
error#c4b9f9bb code:int text:string = Error;
null#56730bcc = Null;
inputPeerEmpty#7f3b18ea = InputPeer;
inputPeerSelf#7da07ec9 = InputPeer;
inputPeerChat#179be863 chat_id:int = InputPeer;
inputUserEmpty#b98886cf = InputUser;
inputUserSelf#f7c1b13f = InputUser;
peerUser#9db1bc6d user_id:int = Peer;
peerChat#bad0e5bb chat_id:int = Peer;
userEmpty#200250ba id:int = User;
chatEmpty#9ba2d800 id:int = Chat;


contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
true#3fedd339 = True;

---functions---

//invokeAfterMsg#cb9f372d msg_id:long query:!X = X;
//invokeAfterMsgs#3dc4b4f0 msg_ids:Vector<long> query:!X = X;

messages.receivedQueue#55a5bb66 max_qts:int = Vector<long>;
upload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;

//initConnection#c7481da6 api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string query:!X = X;
//invokeWithLayer#da9b0d0d layer:int query:!X = X;

contacts.resolveUsername#f93ccba3 username:string = contacts.ResolvedPeer;
