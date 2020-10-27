import { Component, OnInit } from '@angular/core';
import { Connect } from '../connect.service';

@Component({
  selector: 'app-code-displayer',
  templateUrl: './code-displayer.component.html',
  styleUrls: ['./code-displayer.component.css']
})
export class CodeDisplayerComponent implements OnInit {

  constructor(private connector: Connect) { }

  ngOnInit(): void {
    this.connector.generateCode
    .subscribe(
      () => {
        this.generateHTMLCode();
      }
    );
  }

  generateHTMLCode(): void {
    console.log("generated");
    let block = document.getElementById("codeBlock");
    block.setAttribute("style", "whitespace: pre-line");
    let template = `<Layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <table data-format="A4">
      <tr style="height: 20%">
        <td data-id="1" data-type="T" data-size="1/5" colspan="4" ></td>
      </tr>
      <tr style="height: 20%">	
        <td data-id="2" data-type="S" data-size="1/20" ></td>
        <td data-id="3" data-type="S" data-size="1/20" ></td>
        <td data-id="4" data-type="S" data-size="1/20" ></td>
        <td data-id="5" data-type="S" data-size="1/20" ></td>
        </tr>
      <tr style="height: 20%">
        <td data-id="6" data-type="S" data-size="1/20" ></td>
        <td data-id="7" data-type="S" data-size="1/20" ></td>
        <td data-id="8" data-type="S" data-size="1/20" ></td>
        <td data-id="9" data-type="S" data-size="1/20" ></td>
        </tr>
      <tr style="height: 20%">
          <td data-id="10" data-type="S" data-size="1/5" colspan="2" rowspan="2" ></td>
        <td data-id="11" data-type="S" data-size="1/20" ></td>
        <td data-id="12" data-type="S" data-size="1/20" ></td>
        </tr>
      <tr style="height: 20%">
            <td data-id="13" data-type="S" data-size="1/20" ></td>
        <td data-id="14" data-type="S" data-size="1/20" ></td>
        </tr>
    </table>
    </Layout>`;
    block.innerText = template;

  }

  htmlEncode ( html ): string {
    return html.replace(/[&"'\<\>\n]/g, function(c) 
    {
      switch (c) 
      {
        case "&":
          return "&amp;";
        case "'":
          return "&#39;";
        case '"':
          return "&quot;";
        case "<":
          return "&lt;";
        case "\n":
          return "&#13;";
        default:
          return "&gt;";
      }
    });
  };
}
