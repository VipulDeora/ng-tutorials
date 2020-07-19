import { Component, OnInit } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.scss"],
})
export class HelloComponent implements OnInit {
  username = "";
  chocolate: string;
  image =
    "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg";

  constructor() {}

  ngOnInit() {
    this.username = "Gurneet";
  }

  changeUsername(user) {
    this.username = user;
  }

  submit() {
    // send chocolate to server
  }
}
