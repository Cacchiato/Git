import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';
declare var ace: any; //ace-editor

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  public languages: string[] = ['Java', 'Python', 'C++'];
  language: string = 'Java'; //default language

  defaultContent = {
    'Java': `public class Example {
      public static void main(String[] args) {
        //Type your Java code here.
      }
  }`,

    'Python':`class Solution:
      def example():
        # Type your Python code here.
    
if __name__ == '__main__':
  olution.example()`,

    'C++': `class Example {
      //Type your C++ code here.
};
int main() {
      
}`
  };

  //which problem the users are working 
  sessionId: string;

  //Week3 - connect to Flask executor
  output: string = '';

  constructor(private collaboration: CollaborationService, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
    });

    //Week3 - call restoreBuffer()
    this.collaboration.restoreBuffer();
  }

  initEditor() : void {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();

    this.collaboration.init(this.sessionId);
    this.collaboration.receiveChange(this.editor);

    this.editor.lastAppliedChange = null;

    this.editor.on("change", (e) => {
      //console.log('editor changes: ' + JSON.stringify(e));
      if(this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });
  }

  resetEditor() : void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode("ace/mode/" + this.language.toLocaleLowerCase());
  }

  setLanguage(language: string) : void {
    this.language = language;
    this.resetEditor();
  }

  submit() : void {
    let userCode = this.editor.getValue();
    console.log(userCode);  //for debugging

    const data = {
      usercode: userCode,
      lang: this.language.toLocaleLowerCase()
    };

    this.dataService.buildAndRun(data)
      .then(res => {
        this.output = res;
      });
  }
}
