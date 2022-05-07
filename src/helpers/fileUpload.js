export const fileUpload = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/emanuel-hardwell/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "react-journal");

  try {
    const response = await fetch(url, { method: "POST", body: formData });

    if (response.ok) {
      const data = await response.json();
      return data.secure_url;
    } else {
      throw await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
