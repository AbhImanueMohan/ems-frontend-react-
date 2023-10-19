import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { MDBFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link} from 'react-router-dom';



function Admin() {

  // get path parameter from url
 
  // to hold all employee details
  const [employee, setEmployee] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employees);
    setEmployee(response.data.employees)

  }
  console.log(employee);

  const deleteEmployee =async(id)=>{
    const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    console.log(result);
    alert(result.data.message);
  }

  useEffect(() => {
    fetchData()

  }, [])

  return (
    <div>
      <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='' className='text-light '>
            <i className='fa-solid fa-user-group me-2 text-light'></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/* main Content */}

      <div className="container">
        <h1 className='text-center mx-5 mt-5 text-primary my-5y'  >Employee Mangement System</h1>
        <p style={{ textAlign: 'justify' }}>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>

    <Link to ={'/add'}>
    <a  className='btn btn-primary'
          style={{ marginLeft: '1000px' }}>Add <i className='fa-solid fa-user-plus'></i></a>


    </Link>
      
        <div className="table">
          <MDBTable align="middle">
            <MDBTableHead>

              <tr>
                <th scope="col">Id </th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Title </th>
                <th scope="col">Position </th>
                <th scope="col">Salary </th>
                <th scope="col">Actions</th>
              </tr>




            </MDBTableHead>
            <MDBTableBody>
              {employee.map((item) => (
                <tr>
                  <td> {item.id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.empname}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.age}
                  </td>
                  <td>
                    <th scope='col'>{item.title}</th>
                  </td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                  <td>

                    <Link to={'edit/'+item.id}>
                    
                    <MDBBtn color="link" rounded size="sm">
                      <i className="fa-solid fa-pen text-info"></i>
                    </MDBBtn>
                    </Link>

                    <MDBBtn onClick={()=>deleteEmployee(item.id)} color="link" rounded size="sm">
                      <i className="fa-solid fa-trash text-danger"></i>
                    </MDBBtn>
                  </td>
                </tr>
              ))
              }

            </MDBTableBody>
          </MDBTable>
        </div>

      </div>

      {/* footer */}

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
  )
}

export default Admin