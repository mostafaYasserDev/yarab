import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
// services/api.js

// دالة لجلب البيانات من API باستخدام GET
export const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during GET request:", error);
    throw error;
  }
};

// دالة لإرسال بيانات باستخدام POST
export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to post data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
};

// دالة لإرسال بيانات باستخدام PATCH (لتعديل البيانات)
export const patchData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to patch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during PATCH request:", error);
    throw error;
  }
};

// دالة لإرسال بيانات باستخدام DELETE
export const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during DELETE request:", error);
    throw error;
  }
};
export const getGameById = async (gameId) => {
  try {
    const response = await fetch(`${API_URL}/games/${gameId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
// في ملف api.js

// مثال لدالة تقوم بجلب الألعاب حسب الفئة
export const getGamesByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://your-api-url.com/games/category/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games by category", error);
    return [];
  }
};
