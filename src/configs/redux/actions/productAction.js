import axios from "axios";
import * as string from "../string";

export const getProduct =
  ({ page, limit }) =>
  async (dispacth) => {
    try {
      dispacth({ type: string.GET_PRODUCT_PENDING });
      const { data } = await axios({
        url: `${process.env.REACT_APP_API_BACKEND}/products`,
        method: "GET",
      });
      dispacth({
        type: string.GET_PRODUCT_SUCCESS,
        payload: { data: data.data, pagination: data.pagination },
      });
    } catch (error) {
      dispacth({ type: string.GET_PRODUCT_ERROR, payload: error.response });
    }
  };

export const insertProduct =
  ({ dataForm, navigate }) =>
  async (dispacth) => {
    try {
      dispacth({ type: string.ADD_PRODUCT_PENDING });
      const data = await axios.post(`${process.env.REACT_APP_API_BACKEND}/products`,
        dataForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // const { data } = await axios.post('http://localhost:4000/products', dataForm, {
      //     headers: {
      //         "Content-Type": "multipart/form-data"
      //     }
      // })
      const dataProduct = data.data;
      dispacth({ type: string.ADD_PRODUCT_SUCCESS, payload: dataProduct });
      navigate("/home");
    } catch (error) {
      dispacth({ type: string.ADD_PRODUCT_ERROR, payload: error.response });
    }
  };
  
  export const updateProduct = (id, data) =>  dispatch => {
    return new Promise(async(resolve, reject)=>{
      console.log('id =>',id);
        try {
            dispatch({type: string.UPDATE_PRODUCT_PENDING})
            const {data:resData} = await axios.patch(`${process.env.REACT_APP_API_BACKEND}/products/${id}`, data)
            dispatch({type: string.UPDATE_PRODUCT_SUCCESS})
            resolve(resData.data)
        } catch (error) {
            dispatch({type: string.UPDATE_PRODUCT_ERROR, payload: error.response.data})
            reject(error.response.data)
        }
    })
  
}

export const getDetailProduct = (id) => async (dispacth) => {
  try {
    dispacth({ type: string.GET_DETAIL_PRODUCT_PENDING });
    const { data } = await axios({
      url: `${process.env.REACT_APP_API_BACKEND}/products/${id}`,
      method: "GET",
    });
    const detailProduct = data.data;
    dispacth({
      type: string.GET_DETAIL_PRODUCT_SUCCESS,
      payload: { detailProduct },
    });
    return detailProduct 
  } 
  catch (error) {
    dispacth({
      type: string.GET_DETAIL_PRODUCT_ERROR,
      payload: error.response,
    });
  }
};

export const getBagData = () => async (dispacth) => {
  try {
    dispacth({type: string.GET_BAG_PENDING})
    
  } catch (error) {
    dispacth({
      type: string.GET_BAG_ERROR,
      payload: error.response,
    });
  }
}
