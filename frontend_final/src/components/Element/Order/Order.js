import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "reactstrap";

export default function Order() {
  return (
    <div className="col-4">
      <div className="">
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive m-b50">
              <table className="table check-tbl">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Close</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alert">
                    <td className="product-item-img">
                      <img
                        src={require("../../../images/product/thumb/item1.jpg")}
                        alt=""
                      />
                    </td>
                    <td className="product-item-name">Pizza</td>
                    <td className="product-item-price">$28.00</td>
                    <td className="product-item-quantity">
                      <div className="quantity btn-quantity max-w80">
                        <Form>
                          <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Form.Control>
                          </Form.Group>
                        </Form>
                      </div>
                    </td>
                    <td className="product-item-totle">$28.00</td>
                    <td className="product-item-close">
                      <NavLink
                        to={""}
                        data-dismiss="alert"
                        aria-label="close"
                        className="ti-close"
                      ></NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
