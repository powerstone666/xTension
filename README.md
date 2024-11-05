
# Follow All Button Content Script

A content script that automates interactions on X.com by adding a "Follow All" button to the page. When clicked, it navigates to the home page, hovers over specified elements, and clicks "Follow" on available follow buttons with delays in between.

## Features

- Adds a "Follow All" button to the X.com page.
- Automates actions such as:
  - Navigating to the home page.
  - Hovering over elements with a specific class name.
  - Clicking on "Follow" buttons with a delay between each action.
- Uses a content script to execute automation logic directly within the page's DOM.

## Installation

1. Clone this repository or download the content script file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the folder containing your content script.

## Usage

1. Navigate to `https://x.com` (or any page that matches the pattern specified in `matches`).
2. A "Follow All" button will appear at the top right corner of the page.
3. Click the "Follow All" button to start the automation.

## Code Structure

- **Button Creation**: Creates a button element and styles it for visibility on the page.
- **Automate Actions**:
  - Navigates to the home page by clicking on the `/home` link.
  - Hovers over elements with a specific class name.
  - Clicks on elements that have the "Follow" button text with a delay.


## Requirements

- Chrome Browser: Tested on the latest version of Chrome.
- Permissions: Ensure the content script has permissions to run on https://x.com.

## Troubleshooting

- If elements are not being found, verify that the class names used in querySelector match the current class names on the page. Some websites dynamically change class names, which may require adjustments in the script.
- Check the console for logs and error messages to diagnose any issues with element selection or delays.

## Disclaimer
- This script is intended for educational and demonstration purposes only. Be sure to comply with X.com's terms of service and any applicable laws regarding automated interactions.

> setTimeout(resolve, 3000));
                    } else {
                        console.error("Follow button not found");
                    }
                }
            }, 3000);
        };

        button.addEventListener("click", automateActions);
    }
});

# Enjoy the automation and streamline your X.com experience!


https://drive.google.com/file/d/1N-SC-wVYupZIYoj5OVAFmYqZhaKhWlRt/view?usp=drivesdk