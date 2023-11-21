//donot deploy this secret api key
// const API_KEY="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"

// const API_KEY="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"
// const submitIcon=document.querySelector("#submit-icon")
// const inputElement=document.querySelector("input")
// const imageSection=document.querySelector(".images-section")

// const getImages=async()=>{
//     const options={
//         method:"POST",
//         headers:{
//             "Authorization":`Bearer ${API_KEY}`,
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             prompt:inputElement.value,
//             n:1,
//             size:"1024x1024"
//         })
//     }
//     try{
//     const response= await fetch("https://api.openai.com/v1/images/generations",options)
//     const data=await response.json()
//     // console.log(data)
//     data?.data.forEach(imageObject=>{
//         const imageContainer=document.createElement("div")
//         imageContainer.classList.add("image-container")
//         const imageElement=document.createElement("img")
//         imageElement.setAttribute("src",imageObject.url)
//         imageContainer.append(imageElement)
//         imageSection.append(imageContainer)

//     })
//     }catch(error){
//     //  console.log(error)
//     }
// }

// submitIcon.addEventListener('click',getImages)

const API_KEY = "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";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".images-section");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 1,
      size: "1024x1024"
    })
  };
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", options);
    const data = await response.json();
    // console.log(data)
    data?.data.forEach(imageObject => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageObject.url);
      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    });
  } catch (error) {
    console.log(error)
  }
};

submitIcon.addEventListener('click', getImages);

