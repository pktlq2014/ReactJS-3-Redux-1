import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import ProductTable from './components/ProductTable';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/Control';
import SizeSetting from './components/SizeSetting';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Apple Iphone 1 Plus 16GB",
          price: 1500000,
          image: "https://didongthongminh.vn/upload_images/2020/10/iphone12-pro.png",
          status: false
        },
        {
          id: 2,
          name: "Apple Iphone 2 Plus 16GB",
          price: 1500000,
          image: "https://didongthongminh.vn/upload_images/2020/10/iphone12-pro.png",
          status: true
        },
        {
          id: 3,
          name: "Apple Iphone 3 Plus 16GB",
          price: 1500000,
          image: "https://didongthongminh.vn/upload_images/2020/10/iphone12-pro.png",
          status: false
        },
        {
          id: 4,
          name: "Apple Iphone 4 Plus 16GB",
          price: 1500000,
          image: "https://didongthongminh.vn/upload_images/2020/10/iphone12-pro.png",
          status: true
        }
      ],
      isActive: true,
      color: 'red',
      fontSize: 15,
      txtName: '',
      txtPassword: '',
      txtTextArea: '',
      slGender: 0,
      rdLanguage: 'vi',
      cbAgree: false,
      tasksUpdate: [],
      search: {
        name: '',
        active: -1
      },
      txtKey: '',
      sort: {
        values: '',
        data: 0
      }
    };
  }
  showTaskForm = () => {
    this.props.showTaskForm();
    this.props.defaultTasks();
  }
  getValuesInput = (event) => {
    // this.setState({
    //   txtName : event.target.value
    // });
    var { target } = event;
    var name = target.name; // txtName and txtPassword
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  catchEventSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.txtName);
    console.log(this.state.txtPassword);
    console.log(this.state.txtTextArea);
    console.log(this.state.slGender);
    console.log(this.state.rdLanguage);
    console.log(this.state.cbAgree);
  }
  onReceiveReset = (reset) => {
    this.setState({
      fontSize: reset
    });
  }
  onReceiveSize = (values) => {
    this.setState({
      fontSize: values
    });
  }
  receiveData = (values) => {
    this.setState({
      color: values
    });
  }
  onSetState = () => {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      });
    }
    else {
      this.setState({
        isActive: true
      });
    }
  }
  onAddProduct = () => {
    console.log(this.refs.name.value);
  }
  render() {
    var propsStatus = this.props.status;
    console.log(propsStatus);
    var status = propsStatus === false ? '' : <TaskForm />;
    var { search, sort } = this.state;
    console.log(search);
    console.log(sort);
    var elementsProduct = this.state.products.map((values, index) => {
      var result = '';
      result = <ProductTable
        key={values.id}
        id={values.id}
        name={values.name}
        price={values.price}
      />
      return result;
    });
    var elements = this.state.products.map((values, index) => {
      var result = '';
      if (values.status === true) {
        result = <Product
          key={values.id}
          price={values.price}
          name={values.name}
          image={values.image} />
      }
      return result;
    });
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div className={propsStatus === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : 'col-xs-0 col-sm-0 col-md-0 col-lg-0'}>
              {status}
            </div>



            <div className={propsStatus === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button type="button" className="btn btn-primary" onClick={this.showTaskForm}>
                <i className="fa fa-plus mr-5"></i>Thêm Công Việc
              </button>
              <button type="button" className="btn btn-danger" onClick={this.onClick}>
                <i className="fa fa-plus mr-5"></i>Generator
              </button>



              <Control />



              <div className="row mt-15">
                <TaskList />
              </div>
            </div>
          </div>
        </div>



        <div className="container mt-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.catchEventSubmit}>
                    <div className="form-group">
                      <label for="">Username: </label>
                      <input type="text"
                        className="form-control"
                        name="txtName"
                        value={this.state.txtName}
                        onChange={this.getValuesInput} />
                    </div>



                    <div className="form-group">
                      <label for="">Password: </label>
                      <input type="password"
                        className="form-control"
                        name="txtPassword"
                        value={this.state.txtPassword}
                        onChange={this.getValuesInput} />
                    </div>



                    <div className="form-group">
                      <label for="">Textarea: </label>
                      <textarea name="txtTextArea"
                        className="form-control"
                        rows="3"
                        value={this.state.txtTextArea}
                        onChange={this.getValuesInput}
                        required="required"></textarea>
                    </div>



                    <select name="slGender"
                      onChange={this.getValuesInput}
                      id="input"
                      value={this.state.slGender}
                      className="form-control"
                      required="required">
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>



                    <label>Ngôn Ngữ</label>
                    <div className="radio">
                      <label>
                        <input type="radio"
                          name="rdLanguage" id="input"
                          onChange={this.getValuesInput}
                          checked={this.state.rdLanguage === 'en'}
                          value="en" />
                        Tiếng Anh
                      </label>


                      <br />
                      <label>
                        <input type="radio"
                          name="rdLanguage" id="input"
                          onChange={this.getValuesInput}
                          checked={this.state.rdLanguage === 'vi'}
                          value="vi" />
                        Tiếng Việt
                      </label>
                    </div>




                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          onChange={this.getValuesInput}
                          value={true}
                          name="cbAgree"
                          checked={this.state.cbAgree === true}
                        />
                        Chấp Nhận
                      </label>
                    </div>





                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                    <button type="submit" className="btn btn-default">Xóa Trắng</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container mt-50">
          <div className="row">
            {/* nhận data từ thằng con gửi lên */}
            <ColorPicker color={this.state.color} onReceiveColor={this.receiveData} />



            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting color={this.state.fontSize} onReceiveSize={this.onReceiveSize} />
              <Reset fontSize={this.state.fontSize} onReceiveReset={this.onReceiveReset} />
            </div>



            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>



        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {elementsProduct}
                </tbody>
              </table>
              <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                Active : {this.state.isActive === true ? 'true' : 'false'}
              </button>



              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Thêm Sản Phẩm</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label>Tên sản phẩm</label>
                      <input type="text" className="form-control" id="" placeholder="input values..." ref="name"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Lưu</button>
                  </div>
                </div>
              </div>



              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    status: state.status,
    updateTasks: state.updateTasks
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    showTaskForm: () => {
      dispatch(actions.toggleForm())
    },
    defaultTasks: () => {
      dispatch(actions.defaultTasks());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);