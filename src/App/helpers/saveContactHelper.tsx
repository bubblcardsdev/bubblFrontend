/* eslint-disable no-unneeded-ternary */
import { getImageUrl } from "../services/getImage";

/* eslint-disable no-unused-vars */
function getSocialMediaType(profileSocialMediaId: any) {
  if (
    profileSocialMediaId?.socialMediaName !== "" &&
    profileSocialMediaId?.activeStatus === true
  ) {
    switch (profileSocialMediaId?.profileSocialMediaId) {
      case 1:
        return "Instagram";
      case 2:
        return "Facebook";
      case 3:
        return "Twitter";
      case 4:
        return "Youtube";
      case 5:
        return "LinkedIn";
      default:
        return "";
    }
  } else {
    return "";
  }
}

function getSocialMediaName(profileSocialMediaId: any) {
  if (
    profileSocialMediaId?.profileSocialMediaId &&
    profileSocialMediaId?.activeStatus === true
  ) {
    if (
      profileSocialMediaId?.socialMediaName.includes("https://") ||
      profileSocialMediaId?.socialMediaName.includes("http://")
    ) {
      switch (profileSocialMediaId.profileSocialMediaId) {
        case 1:
          return {
            url: profileSocialMediaId?.socialMediaName,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 2:
          return {
            url: profileSocialMediaId?.socialMediaName,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 3:
          return {
            url: profileSocialMediaId?.socialMediaName,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 4:
          return {
            url: profileSocialMediaId?.socialMediaName,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 5:
          return {
            url: profileSocialMediaId?.socialMediaName,
            label: getSocialMediaType(profileSocialMediaId),
          };
        default:
          return {};
      }
    } else {
      switch (profileSocialMediaId.profileSocialMediaId) {
        case 1:
          return {
            url: `https://www.instagram.com/${profileSocialMediaId?.socialMediaName}`,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 2:
          return {
            url: `https://www.facebook.com/${profileSocialMediaId?.socialMediaName}`,
            label: getSocialMediaType(profileSocialMediaId),
          };

        case 3:
          return {
            url: `https://www.twitter.com/${profileSocialMediaId?.socialMediaName}`,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 4:
          return {
            url: `https://www.youtube.com/@${profileSocialMediaId?.socialMediaName}`,
            label: getSocialMediaType(profileSocialMediaId),
          };
        case 5:
          return {
            url: `https://www.linkedin.com/in/${profileSocialMediaId?.socialMediaName}`,
            label: getSocialMediaType(profileSocialMediaId),
          };
        default:
          return {};
      }
    }
  } else {
    return {};
  }
}

// async function resizeImage(imageUrl: any, maxWidth: number, maxHeight: number) {
//   const img = new Image();

//   console.log("chcekId", img);
//   img.src = imageUrl;
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const picaInstance = pica();

//   let { width } = img;
//   let { height } = img;

//   if (width > maxWidth || height > maxHeight) {
//     if (width > height) {
//       height = Math.round((maxWidth / width) * height);
//       width = maxWidth;
//     } else {
//       width = Math.round((maxHeight / height) * width);
//       height = maxHeight;
//     }
//   }

//   canvas.width = width;
//   canvas.height = height;

//   context!.drawImage(img, 0, 0, width, height);

//   const resizedImageUrl = canvas.toDataURL("image/jpeg", 0.8); // You can adjust the quality (0.8) as needed

//   console.log(resizedImageUrl, "resizedImageUrl");
//   return resizedImageUrl;
// }

// Function to fetch image URL

async function resizeBase64Image(
  base64: string,
  maxWidth: number,
  maxHeight: number
): Promise<string> {
  // Create a new image element
  const img = new Image();

  // Prefix the base64 string with the necessary data URI scheme
  const base64Image = `data:image/jpeg;base64,${base64}`;

  // Return a promise that resolves when the image is fully loaded
  return new Promise((resolve, reject) => {
    // Set up an onload handler to process the image after it has loaded
    img.onload = () => {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Extract the original width and height of the image
      let { width, height } = img;

      // Resize logic to maintain aspect ratio
      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height = Math.round((maxWidth / width) * height);
          width = maxWidth;
        } else {
          width = Math.round((maxHeight / height) * width);
          height = maxHeight;
        }
      }

      // Set the canvas size to the new width and height
      canvas.width = width;
      canvas.height = height;

      // Draw the resized image on the canvas
      context!.drawImage(img, 0, 0, width, height);

      // Convert the resized canvas to a base64 string (JPEG format with 0.8 quality)
      const resizedBase64 = canvas.toDataURL("image/jpeg", 0.8).split(",")[1]; // Get only the base64 string

      // Resolve the promise with the resized base64 string
      resolve(resizedBase64);
    };

    // Set up an onerror handler to reject the promise if the image fails to load
    img.onerror = (err) => {
      reject(err);
    };

    // Start loading the image by setting the src attribute to the prefixed base64 string
    img.src = base64Image;
  });
}

const fetchImageUrl = async (deviceUid: any) => {
  console.log("Fetching image URL", deviceUid);
  // if (profileImg && profileImg.square) {
  const idObj = { profileId: deviceUid };
  const urls = await getImageUrl(idObj);
  if (urls && urls.baseUrl) {
    return urls.baseUrl; // Return the baseUrl if it exists
  }
  return "";

  // return urls?.baseUrl;

  // return null;
};

async function getImage(profileImage: any, deviceUid: any) {
  let imgUrl = "";

  // if (profileImage && profileImage.square) {
  //   imgUrl = profileImage.square;
  // } else {
  imgUrl = await fetchImageUrl(deviceUid);

  // }

  if (imgUrl) {
    console.log("imgUrl:", imgUrl);
    imgUrl = await resizeBase64Image(imgUrl, 500, 500);
  } else {
    imgUrl = "";
  }

  console.log("imgUrl: +", imgUrl);

  return imgUrl;
}

function generateVCardV4(
  fullName: string,
  organization: any,
  jobTitle: any,
  photoURL: any,
  phoneNumbers: any[],
  emails: any[],
  websiteURLs: any[],
  workAddress: string,
  locality: string,
  region: string,
  postalCode: string,
  country: string,
  socialMedia: any[]
) {
  console.log(
    fullName,
    organization,
    jobTitle,
    phoneNumbers,
    emails,
    photoURL,
    websiteURLs,
    workAddress,
    socialMedia
  );
  console.log("came inside");
  console.log(photoURL, "photo");
  //   let vCard = `BEGIN:VCARD
  // VERSION:4.0
  // N:${fullName};;;;
  // FN:${fullName}
  // ORG:${organization}
  // TITLE:${jobTitle}
  // PHOTO;ENCODING=b;TYPE=image/jpeg:`;
  //   // Adding phone numbers
  //   phoneNumbers.forEach((phoneNumber, index) => {
  //     vCard += `
  // TEL;TYPE=work${index > 0 ? "," : ""}VOICE:${phoneNumber}`;
  //   });

  //   // Adding email addresses
  //   emails.forEach((email, index) => {
  //     vCard += `
  // EMAIL;TYPE=work${index > 0 ? "," : ""}:${email}`;
  //   });

  //   // Adding website URLs with labels
  //   websiteURLs.forEach((website, index) => {
  //     const url = website;
  //     const label = "Website";
  //     vCard += `
  // item${index + 1}.URL;type=pref:${url}
  // item${index + 1}.X-ABLabel:${label}`;
  //   });

  //   vCard += `
  // ADR;TYPE=work:${workAddress}`;

  //   // Adding social media profiles
  //   socialMedia.forEach((profile, index) => {
  //     vCard += `
  // item${index + 1}.URL;type=pref:${profile.url}
  // item${index + 1}.X-ABLabel:${profile.label}`;
  //   });

  //   vCard += `
  // END:VCARD`;
  const address =
    workAddress !== null && workAddress !== undefined ? workAddress : "";

  let vCard = `BEGIN:VCARD
VERSION:3.0
N:;${fullName};;;
FN:${fullName}
ORG:${organization}
TITLE:${jobTitle}`;
  if (photoURL) {
    vCard += `
PHOTO;ENCODING=b;TYPE=image/jpeg:${photoURL}`;
  }
  // Adding phone numbers
  phoneNumbers.forEach((phoneNumber, index) => {
    vCard += `
TEL;TYPE=work,voice${index > 0 ? "," : ""}:${phoneNumber}`;
  });

  // Adding email addresses
  emails.forEach((email, index) => {
    vCard += `
EMAIL;TYPE=internet,work${index > 0 ? "," : ""}:${email}`;
  });

  const addressSet = new Set(websiteURLs);

  addressSet.forEach((url, index) => {
    const label = "Website";
    vCard += `
item${index + 1}.URL;type=pref:${url}
item${index + 1}.X-ABLabel:${label}`;
  });

  // Adding website URLs with labels
  //   websiteURLs.slice(0, 1).forEach((website, index) => {
  //     const url = website;
  //     const label = "Website";
  //     vCard += `
  // item${index + 1}.URL;type=pref:${url}
  // item${index + 1}.X-ABLabel:${label}`;
  //   });

  // console.log("address address", address);

  if (address) {
    // eslint-disable-next-line prefer-const
    let workaddress = workAddress.replace(/\n/g, " ");
    vCard += `
ADR;TYPE=WORK:;;${workaddress};${locality};${region};${postalCode};${country}`;
  }

  // Adding social media profiles
  socialMedia.forEach((profile, index) => {
    vCard += `
X-SOCIALPROFILE;type=${profile.label}:${profile.url}`;
  });

  vCard += `
END:VCARD`;

  console.log(vCard, "card");
  return vCard;
}

async function SaveVCFContact(
  firstName: string | undefined,
  lastName: string | undefined,
  companyName: any,
  designation: any,
  phoneNumber: any,
  profileImg: { square: string; rectangle: string } | null,
  contacts: any,
  mediaArray: any,
  website: string[],
  emailId: any,
  deviceId: any,
  state: any,
  city: any,
  address: any,
  country: any,
  deviceUid: any
) {
  // ----------------

  // -------------
  const phoneNumbers: any[] = [];
  const emails: any[] = [];
  const websiteUrl: any[] = [];
  const socialMedia: (
    | { url: any; label: string }
    | { url?: undefined; label?: undefined }
  )[] = [];

  // Push phone numbers into an array
  if (Array.isArray(phoneNumber)) {
    phoneNumber.forEach((element: any) => {
      if (element.phoneNumber) {
        phoneNumbers.push(element.phoneNumber);
      }
    });
  }

  // Push emails into an array
  if (Array.isArray(emailId)) {
    emailId.forEach((element: any) => {
      if (element.emailId) {
        emails.push(element.emailId);
      }
    });
  }

  // Push valid website URLs into an array
  if (website) {
    website.forEach((element: any) => {
      if (element.website) {
        websiteUrl.push(element.website);
      }
    });
  }

  // Push valid social media profiles into an array
  if (mediaArray) {
    mediaArray.forEach((element: any) => {
      const media = getSocialMediaName(element);
      if (media && media.url && media.label && Object.keys(media).length > 0) {
        socialMedia.push(media);
      }
    });
  }

  const profileImages = await getImage(profileImg, deviceUid);

  // console.log(profileImages, ":::: image");

  // Check if profile image is available

  // Generate vCard data
  const formattedFirstName = firstName || "";
  const formattedLastName = lastName || "";
  const formattedCompanyName = companyName || "";
  const formattedDesignation = designation || "";
  const formattedAddress = contacts || "";
  const formattedCity = city || "";
  const formattedState = state || "";
  const formattedCountry = country || "";

  const vCardData = generateVCardV4(
    formattedFirstName,
    formattedCompanyName,
    formattedDesignation,
    profileImages,
    phoneNumbers,
    emails,
    websiteUrl,
    formattedAddress,
    formattedCity,
    formattedState,
    "",
    formattedCountry,
    socialMedia
  );

  return vCardData;
}

export default SaveVCFContact;
