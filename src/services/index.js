import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: { Accept: "application/json" },
    timeout: 60 * 1000,
  });

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const authenticatedHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  };

  // Login Api
  const authLogin = createAsyncThunk(
    "Login Api",
    async (body) => await api.post("/api/users/login", body)
  );

  /*==========    PUT  REQUESTS    ==========*/
  const updateUserProfile = (id, body) =>
    api.put(`/api/users/profile/${id}`, body);
  /*==========    GET REQUESTS    ==========*/
  const getWallet = (id) =>
    api.get(`/api/wallet/wallet/${id}`, { headers: authenticatedHeaders });

  const getUserProfile = (id) =>
    api.get(`/api/users/profile/${id}`, { headers: authenticatedHeaders });

  /*==========    POST REQUESTS    ==========*/
  // const authLogin = (body) => api.post("/api/users/login", body, { headers });

  const sendInvestorFormData = (body) =>
    api.post("/api/users", body, { headers });

  const legalForm = (body) =>
    api.post("/api/users/legal-Form", body, { headers });

  const walletCreate = (body) => api.post("/api/users/Wallet/:id", body);

  const investNow = (body) => api.post("/api/invest/investor/:id", body);

  //Returning all the API
  return {
    sendInvestorFormData,
    legalForm,
    authLogin,
    walletCreate,
    getWallet,
    updateUserProfile,
    getUserProfile,
    investNow,
  };
};

const apis = createBackendServer(" http://localhost:5000");

export default apis;
