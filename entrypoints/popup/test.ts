// src/actions.ts
export const performAction = async (): Promise<void> => {
    // Get the currently active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Ensure the tab is found and check if it's on the right domain
    if (tab?.id) {
        const currentUrl = tab.url ?? "";

        // If the current URL is not x.com, redirect to x.com
        if (!currentUrl.includes("x.com")) {
            await chrome.tabs.update(tab.id, { url: "https://x.com/home" });
         
        } else {
            // If already on x.com, proceed with automation immediately
            automateActions(tab.id);
        }
    } else {
        console.error("No active tab found");
    }
};

// Separate function to handle hover and click actions
const automateActions = (tabId: number) => {
    chrome.scripting.executeScript({
        target: { tabId },
        function: async () => {
          const home=  document.querySelector<HTMLLinkElement>('a[href="/home"]')
          if(home)
          {
            home.click();
          }
        
         /* const forYou=document.querySelector<HTMLSpanElement>('span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3')
          if(forYou)
          {
            if(forYou.textContent==='For You')
            {
                forYou.click();
            }
          }*/
         setTimeout(async ()=>{
            // Function to hover over elements
            const hoverElements = document.querySelectorAll<HTMLDivElement>('div.css-175oi2r.r-172uzmj.r-1pi2tsx.r-13qz1uu.r-o7ynqc.r-6416eg.r-1ny4l3l');
            for (const h of hoverElements) {
                if (h) {
                    h.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
                    console.log('Hovered over element');
                    await new Promise<void>(resolve => setTimeout(resolve, 2000)); // 2-second delay before the next hover
                } else {
                    console.error("Hover element not found");
                }
            }

            // Function to click follow buttons with delay
            const followButtons = document.querySelectorAll<HTMLSpanElement>('span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3');
            for (const span of followButtons) {
                if (span.textContent === 'Follow') {
                    span.click();
                    console.log('Clicked follow button');
                    await new Promise<void>(resolve => setTimeout(resolve, 3000)); // 3-second delay before the next click
                } else {
                    console.error("Follow button not found");
                }
            }
        },3000)
        }
    });
};


