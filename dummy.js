//after running npm run dev  paste this code in main() inside content.js for enabling a floating button.

const button = document.createElement("button");
button.textContent = "Follow All";
button.className = "my-button";
button.id = "my-button-id";
button.style.position = "fixed";
button.style.top = "20px";
button.style.right = "20px";
button.style.zIndex = "21474836";
button.style.background = "blue";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.padding = "10px 15px";
button.style.cursor = "pointer";
document.body.appendChild(button);
const automateActions = async () => {
const home=  document.querySelector('a[href="/home"]')
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
  const hoverElements = document.querySelectorAll('div.css-175oi2r.r-172uzmj.r-1pi2tsx.r-13qz1uu.r-o7ynqc.r-6416eg.r-1ny4l3l');
  for (const h of hoverElements) {
      if (h) {
          h.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
          console.log('Hovered over element');
          await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay before the next hover
      } else {
          console.error("Hover element not found");
      }
  }

  // Function to click follow buttons with delay
  const followButtons = document.querySelectorAll('span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3');
  for (const span of followButtons) {
      if (span.textContent === 'Follow') {
          span.click();
          console.log('Clicked follow button');
          await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay before the next click
      } else {
          console.error("Follow button not found");
      }
  }
},3000)
}
button.addEventListener("click",automateActions)
