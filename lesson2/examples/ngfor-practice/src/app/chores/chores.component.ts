import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ["Empty Dishwasher", "Start LaunchCode Prep Work", "Buy Groceries"]},
      {title: "Today's Chores", tasks: ["Load Dishwasher", "Finish LaunchCode Prep Work", "Buy the Groceries You Forgot"]},
      {title: "Tomorrow's Chores", tasks: ["Empty Dishwasher AGAIN", "Play With LaunchCode Practice Code", "Groceries AGAIN"]}
   ]

   constructor() { }

   ngOnInit() {
   }

}
