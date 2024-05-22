
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardCard from '../../components/cards/DashboardCard';
import styles from './Dashboard.module.scss'
import Header from '../../components/header/Header';

import { useFormik } from 'formik';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchData,setSearchData]= useState('')
  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    if (sortType) {
      setData((prevData) => [...prevData].sort((a, b) => {
        if (sortType === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      }));
    }
  }, [sortType]);

  const getData = () => {
    axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/basket')
      .then(res => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      getData();
    }, 1000);
    
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://664ae3eea300e8795d434de5.mockapi.io/basket/basket/${id}`)
      .then(() => {
        getData();
      });
  };



    const formik = useFormik({
      initialValues: {
        thumbnail: ' ',
        title: ' ',
        price: ' ',

      },
      onSubmit: values => {
      axios.post(`https://664ae3eea300e8795d434de5.mockapi.io/basket/basket`,values)
       setTimeout(()=>{
        getData()
       }, 1000);
      },
    });

    const handleSort = (type) => {
      setSortType(type);
    };


    const handleSearch = (event) => {
      setSearchData(event.target.value);
    };
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

  return (
    <div>
     <Header/>
      <div className={styles.dastext}>
        <h1 >
          DASHBOARD
        </h1>
      </div>

      <div>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">Image</label>
       <input
     
         name="thumbnail"
     
         type="text"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <label htmlFor="lastName">Title</label>
       <input
       
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="email">Price</label>
       <input
       
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
      </div>
      <div className={styles.dash}>
        {
          data && data.map(item => <DashboardCard key={item.id} item={item} sil={() => removeItem(item.id)} />)
        }
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredData.map((item) => (
          <DashCard key={item.id} item={item} sil={() => deleteItem(item.id)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
