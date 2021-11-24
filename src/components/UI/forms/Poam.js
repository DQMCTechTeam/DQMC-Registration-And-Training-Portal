import { Fragment, useState } from "react";
import ActionItem from "../ActionItem";

const newActionItem = [
  {
    id: Math.floor(Math.random() * 100),
    itemChecked: false,
    text: "",
    officer: "",
    estimatedDate: "",
    actualDate: "",
  },
];
const Poam = () => {
  const [actionItems, setActionItems] = useState(newActionItem);

  const HeaderLabel = (props) => {
    return (
      <Fragment>
        <br />
        <div class="row">
          <div class="col-md-4 text-left">
            <h4>{props.text} </h4>
          </div>
          <hr />
          <br />
        </div>
      </Fragment>
    );
  };
  const AddActionItemHandler = (event) => {
    event.preventDefault();
    setActionItems([...actionItems, newActionItem]);
    console.log("Item added!");
  };
  return (
    <Fragment>
      <form>
        <HeaderLabel text={"1). POAM Main Information"} />
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="region">* Region: </label>
          </div>
          <div class="col-md-2 col-sm-3">
            <input class="text-width" name="region" id="region" required />
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <label for="site">* Site:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <select name="site" id="site" required>
              <option value="">Please Choose...</option>
              <option value="0097">0097 Altus</option>
              <option value="0802">0802 Anderson</option>
              <option value="0066">0066 Andrews</option>
              <option value="0808">0808 Aviano</option>
            </select>
          </div>
        </div>
        <div class="row"></div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="site">* Question:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <select name="question" id="question" required>
              <option value="">Please Choose...</option>
              <option value="1a">1a - EOD</option>
              <option value="2a">2a - Output 3-day</option>
              <option value="2b">2b - APV 15-day</option>
              <option value="2c">2c - Inpt 30-day</option>
            </select>
          </div>
        </div>
        <HeaderLabel text={"2). POAM Details"} />
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="status">* Status:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <select name="status" id="status" required>
              <option value="">Please Choose...</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="initialFYNonCompliantDate">
              * Initial FY Non-Compliant Date:
            </label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <input
              type="date"
              name="initialFYNonCompliantDate"
              id="initialFYNonCompliantDate"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="numberofMonthsNonCompliant">
              * Number of Months Non-Compliant:
            </label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <input
              type="number"
              name="numberofMonthsNonCompliant"
              id="numberofMonthsNonCompliant"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="estimatedCompletionDate">
              * Estimated Completion Date:
            </label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <input
              type="date"
              name="estimatedCompletionDate"
              id="estimatedCompletionDate"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="actualCompletionDate">* Actual Completion Date:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <input
              type="date"
              name="actualCompletionDate"
              id="actualCompletionDate"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="poamPOC">POA&M POC:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <input type="text" name="poamPOC" id="poamPOC" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="issues">Issues:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <textarea
              placeholder="• A brief description of the problem and the metric used to describe the problem.&#10;• Where the problem is occurring by process name and location.&#10;• The time frame over which the problem has been occurring.&#10;•The size or magnitude of the problem.&#10;• Issues are problems that are happening now."
              name="issues"
              id="issues"
              cols="75"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="rootCauses">Root causes:</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <textarea
              placeholder="There is a problem, and most of the time you try to fix the symptoms, but almost certainly it will return. &#10;You need to look deeper to see what is causing the issue, so you could fix the system and processes to make sure the issue doesn't come back. Root Cause Analysis (RCA) is a useful technique for understanding and solving an issue. For additional tips on how to conduct an RCA: http://www.wikihow.com/Use-Root-Cause-Analysis."
              name="rootCauses"
              id="rootCauses"
              cols="75"
              rows="10"
            ></textarea>
          </div>
        </div>
        <HeaderLabel text={"3). POAM Risks & Dependencies"} />
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="risks">Risks</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <textarea
              name="risks"
              id="risks"
              cols="75"
              rows="10"
              placeholder="Risks are problems that might happen but have not yet. Addressing these early greatly reduces the likelihood of risks turning into issues and affecting your ability to deliver"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <label for="dependencies">Dependencies</label>
          </div>
          <div class="col-md-2 col-sm-3 text-left">
            <textarea
              name="dependencies"
              id="dependencies"
              cols="75"
              rows="10"
              placeholder="Risks are problems that might happen but have not yet. Addressing these early greatly reduces the likelihood of risks turning into issues and affecting your ability to deliver"
            ></textarea>
          </div>
        </div>
        <HeaderLabel text={"4). POA&M Action Items"} />
        {actionItems.map((item) => (
          <ActionItem key={item.id} text={item.text} />
        ))}
        <div class="row">
          <div class="col-md-2 col-sm-3 text-left">
            <button onClick={AddActionItemHandler}>Add Action Item</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Poam;
