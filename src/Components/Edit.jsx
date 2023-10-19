/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { MDBFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import {  useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Edit() {

  const location = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [title,setTitle]=useState('')
  const [position,setPosition]=useState('')
  const [salary,setSalary]=useState('') 
  const pathParams =useParams()
  // console.log(pathParams.id);

  // get particular employee details

    const fetchEmployee = async()=>{
    const result = await axios.get('http://localhost:8000/getEmployee/' + pathParams.id)
    console.log(result.data.employee);
    setId(result.data.employee.id)
    setEmpname(result.data.employee.empname)
    setAge(result.data.employee.age)
    setTitle(result.data.employee.title)
    setPosition(result.data.employee.position)
    setSalary(result.data.employee.salary)
  }

  // update employee
    const updateEmployee=async ()=>{
    const body = {id, empname, age, title, position, salary}
    const result = await axios.post('http://localhost:8000/updateEmployee',body)
    console.log(result.data.message);
    alert(result.data.message)
    location('/')
  }
  useEffect(()=>{
    fetchEmployee()
}, [])



  return (
    <div>
        <div>
        <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light '>
            <i className='fa-solid fa-user-group me-2 text-light'></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <div className="container">
        <h1 className='text-center mx-5 mt-5 text-primary my-5y'  >
          Update Employee Details</h1>
</div>

{/* form */}
<MDBInput value={id} onChange={(e)=>setId(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Id' />
      <MDBInput value={empname} onChange={(e)=>setEmpname(e.target.value)} wrapperClass='mb-4' id='form9Example2' label='Name'/>
      <MDBInput value={age} onChange={(e)=>setAge(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Age' />
      <MDBInput value={title} onChange={(e)=>setTitle(e.target.value)} wrapperClass='mb-4' id='form9Example2' label='Title'/>  
      <MDBInput value={position} onChange={(e)=>setPosition(e.target.value)} wrapperClass='mb-4' id='form9Example2' label='Position' />   
      <MDBInput value={salary} onChange={(e)=>setSalary(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Salary' />
      <MDBBtn onClick={(e)=>updateEmployee(e)}  type='submit'  className='mb-4' block>
              Update Employee
            </MDBBtn>



<footer>
        <MDBFooter className='text-center  text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.295)' }}>
          <MDBContainer className='pt-4'>
            <section className='mb-4'>
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fab fa-facebook-f' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-twitter' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-google' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-instagram' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-linkedin' />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
              >
                <MDBIcon fab className='fa-github' />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-dark' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      </footer>
    </div>
    </div>
  )
}

export default Edit