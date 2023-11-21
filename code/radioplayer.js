// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

//Parent till radiospelare
const containerEl = document.getElementById("channels");
// fetch function
async function getRadio() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);
  // går igenom hämtad /data.channel

  data.channels.forEach((channel) => {
    //div till radiospelare container
    const radioChannelContainer = document.createElement("div");
    radioChannelContainer.setAttribute("class", "channel");
    radioChannelContainer.style.backgroundColor = `#${channel.color}`;
    // radispelar bild
    const radioImg = document.createElement("img");
    radioImg.src = channel.image;
    // radio station
    const radioStation = document.createElement("h1");
    radioStation.textContent = channel.name;

    //appendar NAMN
    radioChannelContainer.appendChild(radioStation);
    //radio Audio player
    const audioPlayerEl = document.createElement("audio");
    audioPlayerEl.controls = true;
    const audioPlayerSrc = document.createElement("source");
    audioPlayerSrc.src = channel.liveaudio.url;
    audioPlayerEl.type = "audio/mpeg";

    // appendar radio player
    radioChannelContainer.appendChild(audioPlayerEl);
    //appendar radio src
    audioPlayerEl.appendChild(audioPlayerSrc);

    console.log(containerEl);
    // append till radiospelarcontianer
    containerEl.appendChild(radioChannelContainer);
    //append till radioIMG
    radioChannelContainer.appendChild(radioImg);
  });
}
getRadio();
