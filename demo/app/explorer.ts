import { EventData } from "data/observable";
import { Page } from "ui/page";
import { ExplorerModel } from "./explorer-vm";

export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new ExplorerModel();
    console.log('explorer navigatingTo');
}