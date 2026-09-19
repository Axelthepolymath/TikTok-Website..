/*
  SEND WORLDWIDE
  TikTok Product Concept Prototype

  This is only a simulation.

  It does NOT connect to TikTok
  and does NOT send real messages.
*/


// Fictional demo accounts

const accounts = [

  ["USR-104829", "Maya Creator"],

  ["USR-582104", "Alex Media"],

  ["USR-771930", "Jordan Studio"],

  ["USR-920481", "Lina Creates"],

  ["USR-318572", "Noah Studio"],

  ["USR-641903", "Zara Media"],

  ["USR-205814", "Omar Visuals"],

  ["USR-793201", "Sam Digital"],

  ["USR-451820", "Ava World"],

  ["USR-680412", "Leo Creates"],

  ["USR-910275", "Nora Media"],

  ["USR-337194", "Ryan Studio"],

  ["USR-728501", "Mia Global"],

  ["USR-164820", "Chris Media"],

  ["USR-590321", "Sara Creates"],

  ["USR-804217", "Daniel Studio"],

  ["USR-275913", "Emma Digital"],

  ["USR-431608", "Adam World"]

];


// Get elements from HTML

const button =
  document.getElementById("sendWorldwide");

const table =
  document.getElementById("accountTable");

const progressBar =
  document.getElementById("progressBar");

const total =
  document.getElementById("total");

const delivered =
  document.getElementById("delivered");

const remaining =
  document.getElementById("remaining");

const statusBadge =
  document.getElementById("statusBadge");

const progressText =
  document.getElementById("progressText");


// Create the account table

function renderAccounts() {

  table.innerHTML = "";

  accounts.forEach(account => {

    const row =
      document.createElement("tr");

    row.innerHTML = `

      <td>
        ${account[0]}
      </td>

      <td>
        ${account[1]}
      </td>

      <td>
        Waiting
      </td>

      <td>
        —
      </td>

    `;

    table.appendChild(row);

  });

}


// Render accounts when page opens

renderAccounts();


// Small delay helper

function wait(milliseconds) {

  return new Promise(resolve => {

    setTimeout(resolve, milliseconds);

  });

}


// SEND WORLDWIDE BUTTON

button.addEventListener("click", async function () {

  // Prevent double clicking

  button.disabled = true;


  // Change button

  button.innerHTML =
    "🌎 SENDING WORLDWIDE…";


  // Update dashboard

  statusBadge.textContent =
    "DISTRIBUTING";


  const rows =
    [...table.querySelectorAll("tr")];


  // Process every fictional account

  for (
    let i = 0;
    i < rows.length;
    i++
  ) {

    await wait(160);


    const cells =
      rows[i].children;


    // Account is delivered

    cells[2].textContent =
      "Delivered";

    cells[2].className =
      "status-delivered";


    // Time

    cells[3].textContent =
      new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      );


    // Calculate progress

    const processed =
      i + 1;

    const percentage =
      (processed / rows.length) * 100;


    // Update numbers

    total.textContent =
      processed.toLocaleString();

    delivered.textContent =
      processed.toLocaleString();

    remaining.textContent =
      (rows.length - processed)
        .toLocaleString();


    // Update progress bar

    progressBar.style.width =
      percentage + "%";


    // Update text

    progressText.textContent =
      `${processed} of ${rows.length} demo accounts processed`;

  }


  // Finished

  statusBadge.textContent =
    "COMPLETE";


  progressText.textContent =
    "Worldwide distribution simulation complete.";


  // Reset button

  button.disabled = false;

  button.innerHTML =
    "🌎 SEND WORLDWIDE";

});
