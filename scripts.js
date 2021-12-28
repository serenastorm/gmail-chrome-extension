const colorPresets = {
  tomato: { bgColor: "#FFE6E2", color: "#CA3214" },
  red: { bgColor: "#FFE5E5", color: "#CD2B31" },
  crimson: { bgColor: "#FCE5F0", color: "#D31E66" },
  pink: { bgColor: "#FCE5F3", color: "#CD1D8D" },
  plum: { bgColor: "#F9E5F9", color: "#9C2BAD" },
  purple: { bgColor: "#F3E7FC", color: "#793AAF" },
  violet: { bgColor: "#EDE9FE", color: "#5746AF" },
  indigo: { bgColor: "#E6EDFE", color: "#3451B2" },
  blue: { bgColor: "#E1F0FF", color: "#006ADC" },
  sky: { bgColor: "#D5F4FD", color: "#0078A1" },
  cyan: { bgColor: "#D8F3F6", color: "#0C7792" },
  teal: { bgColor: "#D9F3EE", color: "#067A6F" },
  mint: { bgColor: "#D2F7ED", color: "#147D6F" },
  green: { bgColor: "#DDF3E4", color: "#18794E" },
  grass: { bgColor: "#DFF3DF", color: "#297C3B" },
  lime: { bgColor: "#E4F7C7", color: "#5D770D" },
  yellow: { bgColor: "#FFF8BB", color: "#946800" },
  amber: { bgColor: "#FFECBC", color: "#AD5700" },
  orange: { bgColor: "#FFE8D7", color: "#BD4B00" },
};

let labels = [
  { displayName: "Stocks", ...colorPresets.plum },
  { displayName: "Job search", ...colorPresets.blue },
  { displayName: "Payments", ...colorPresets.red },
  { displayName: "Phone", ...colorPresets.orange },
  { displayName: "Travel", ...colorPresets.yellow },
  { displayName: "Travel/Bookings", ...colorPresets.yellow },
  { displayName: "Health", ...colorPresets.mint },
  { displayName: "Dev", ...colorPresets.indigo },
];

for (var i = 0, l = labels.length; i < l; i++) {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
    table tbody tr td div[role="link"] div[title="${labels[i].displayName}"],
    div[role="button"][aria-label="${labels[i].displayName}"],
    div[role="button"][aria-label="${labels[i].displayName}"] + div[role="button"][data-tooltip] {
      background-color: ${labels[i].bgColor} !important;
    }

    div[role="button"][aria-label="${labels[i].displayName}"]:hover,
    div[role="button"][aria-label="${labels[i].displayName}"] + div[role="button"][data-tooltip]:hover,
    div[role="button"][aria-label="${labels[i].displayName}"]:focus,
    div[role="button"][aria-label="${labels[i].displayName}"] + div[role="button"][data-tooltip]:focus {
      background-color: ${labels[i].color} !important;
      color: ${labels[i].bgColor} !important;
    }
    
    table tbody tr td div[role="link"] div[title="${labels[i].displayName}"] > div {
      border-color: ${labels[i].bgColor} !important;
    }
    
    table tbody tr td div[role="link"] div[title="${labels[i].displayName}"] > div > div,
    div[role="button"][aria-label="${labels[i].displayName}"],
    div[role="button"][aria-label="${labels[i].displayName}"] + div[role="button"][data-tooltip] {
      color: ${labels[i].color} !important;
    }
    </style>`
  );
}

chrome.storage.sync.get("hideMeet", function (hideMeetResponse) {
  if (hideMeetResponse.hideMeet) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
      div[role="navigation"][aria-label="Meet"] {
        display: none !important;
      }
      </style>`
    );

    chrome.storage.sync.get("hideHangouts", function (hideHangoutsResponse) {
      if (hideHangoutsResponse.hideHangouts) {
        document.head.insertAdjacentHTML(
          "beforeend",
          `<style>
          /* Add scroll to sidebar parent */
          .nH.oy8Mbf.nn.aeN {
            overflow-y: scroll !important;
          }

          /* Remove height constraint on sidebar and reset overflow */
          .aeN .ajl {
            height: auto !important;
            overflow: initial !important;
            padding-bottom: 24px !important;
          }

          /* Add a white background to the compose button on scroll */
          .aic {
            position: sticky !important;
            top: 0 !important;
            left: 0 !important;
            z-index: 20 !important;
            padding: 16px 0 16px !important;
            background-color: white !important;
          }

          /* Remove compose button margin since we added padding to the parent */
          .z0 {
            margin: 0 !important;
          }

          div[role="complementary"][aria-label="Hangouts"] {
            display: none !important;
          }
  
          /* Disable sidebar resizing */
          .aeO {
            pointer-events: none !important;
          }
          </style>`
        );
      }
    });
  }
});

chrome.storage.sync.get("hideHangouts", function (response) {
  if (response.hideHangouts) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
      div[role="complementary"][aria-label="Hangouts"] > div:not([aria-label="Meet"]) {
        display: none !important;
      }
      </style>`
    );
  }
});

chrome.storage.sync.get("hideReadEmails", function (response) {
  if (response.hideReadEmails) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
      /* Add a min height to the inbox container in case there's no unread emails */
.aDP > div:first-child.nH {
  min-height: 26px !important;
}

/* Since our pseudo element is absolutely 
positioned, we need to add position: relative 
to the parent*/
.aDP > div:first-child {
  position: relative !important;
}

/* Add a new email message behind the table */
.aDP > div:first-child::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  content: "No new emails.";
  width: 100%;
  text-align: center;
  margin: 8px auto 0 auto;
  color: #5f6368;
  font-size: 14px;
  z-index: 1;
}

.aDP > div:first-child > * {
  position: relative;
  z-index: 2;
}

/* Hide unread emails */
.aDP > div:first-child .yO {
  display: none !important;
}
      </style>`
    );
  }
});
