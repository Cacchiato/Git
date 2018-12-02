import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class CollaborationService {
  collaborationSocket: any;

  constructor() { }

  init(sessionId: string) : void {
    this.collaborationSocket = io(window.location.origin, {query: 'sessionId=' + sessionId});
    //this.receiveChange(editor);
  }

  //receive change from server-side
  receiveChange(editor: any): void {
    this.collaborationSocket.on("change", (delta: string) => {
      console.log('collaboration editor changes: ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });  
  }

  //send change to server-side
  change(delta: string): void {
      this.collaborationSocket.emit("change", delta);
  }

  //Week3 - restoreBuffer
  restoreBuffer(): void {
    this.collaborationSocket.emit("restoreBuffer");
  }
}
