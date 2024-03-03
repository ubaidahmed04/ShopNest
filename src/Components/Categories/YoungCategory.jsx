import React from 'react'
import { Card } from 'react-bootstrap'
import category1 from '../../Images/category1.png'


function YoungCategory() {
  return (
    <div>
    <div className="leaf-img">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAgCAYAAACsGMKuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQESURBVHgB7ZxRbtNoEIBnfndXpe0KvzTSPm33BVFppc2eYMMJ6BHKG0JI9AbQE1AkipB4gJ4AuEF7AvyGgAfcJ4QQ0o9EpdLEM8zYceXQkCbEieN0PqmS/Tt2VeWb8fiv/0EwSuXD65tr3c015zBEkh/kkBhDF+BlBAj1IDOHgJhuA0OYjxdhuQYMgZwbnzkXe8fyz8g1PSX8pTiWAOWfjY+PF/3f/+14mHMQjKFQoYMkCSH4rakig3N/qawqJ3Im6LCi1gH521R+nwYQs0dEnyR86JA9yRgR6/H4z/XHMdQQE7+Ayi1ZuulUZBFbvvA1BGxCJngIRl80SFjvHpgGS6R3FL2bdO8kMxkcF1L8XHAgbAYBiuDQApN70kTFwADHEbY78VF7Oa6itJp78dMSBVwLA/xXdptSljRN8NkCs5IqAg0OosMOcyTPGtEkA2KuxH//aitcWvrWcuj+B5O89kwyIGotfo/oWbnSBGPuyQNCSqaDvGRq/PMkGvEa9eLT65stWFDRsdWV3TB67g7EdCCzTtGgh+qZF1+z+vLiyYbMgWtW37DSxRgWnVli4Ehm5w60TJJA2C8cmz1U9pVL3zZlSvG6ZXWjVBD25Xnh5cyIb7Ib04IItysXP63Zg+CuzcAY04AZHzSuPtyqRPw0u6+c3EHCLZPdmBpS5qxe2b2WbU6RPLtbKWNMGybYa6zvbub7Exe/kN035+klLqM2eEm026tXd3eKgxMT38oZo3KktOkkyY1+8/mli2/CG1WTvilKvN1Yf/TsZ58pTXwT3pgBPBA++Hq8sHPe+zxji2/CG5UjJQ0nvDcow589ZQw+v711R+ZF75nwRgV4Zt5Ddi9W1x/uw4j8kvg2LWlUhAd9ES3BbSlnxno9eSTx07Jmua3Cb4FhTAePCC84wb1xZS8ytPgf39zeCICfWlljTJgsqxO9BA6iXyljhuFc8TXL/7F0IsLjBhhG+fSIXmZWH8RA8S3LGyWTtiSRh9IDKZejBGi/qg4MfcW3Wt4Yl6xZFUfEcKiSQwBR48qjkZYHTpIz4mtXggUXPAdbv2oMQT/Bj45+j2e9G1uP+FbaGH1IyxPUxd2kjaJYtoO4TZ2orl3UlFPxP7+7dZcI74FxYcjWpMp0ocgM3RaBOuac8yr2PPfRxHTWZrl9nxk2wag7vtvOT2dKdFt7XH6R79bnQhNSnCTk65yty2Bh5VI7e09eF+EKhQaoWu5YyTNdfLdZKxTl1f1cYG3ayoxeJWYC34FOevyiizwqQ/0DS+8Ki4vHaRAEgQsxcacBgQ5CIjrd/3GxidSGoXN4uTg2aEFKHniDKDMo+7XY7vP7fLfv47nnarmQb+eSnu53ZdXtXFjFpJ0+3wGfoS3rn69s4QAAAABJRU5ErkJggg=="
        alt=""
      />
    </div>
    <div className="heading position-relative ">Young’s Favourite</div>
    <div className="row card-body ">
      <div className="col-6 col-md-6 col-sm-12 my-3  young-Card ">
        <Card className="card-box">
          <Card.Img
            variant="top"
            className="young-img img-fluid"
            src={category1}
          />
          <Card.Body>
            <Card.Title className="title">Hoodies & Sweetshirt</Card.Title>
            <div className="d-flex justify-content-between ">
              <div className="flex-column">
                <Card.Text>
                  <span className="explore">Explore Now!</span>
                </Card.Text>
              </div>
              <div>
                <i class="fa-solid fa-arrow-right fa-xl"></i>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-6 col-md-6 col-sm-12 my-3  young-Card">
        <Card className="card-box">
          <Card.Img
            variant="top"
            className="young-img img-fluid"
            src={category1}
          />
          <Card.Body>
            <Card.Title className="title">Hoodies & Sweetshirt</Card.Title>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Text>
                  <span className="explore">Explore Now!</span>
                </Card.Text>
              </div>
              <div>
                <i class="fa-solid fa-arrow-right fa-xl"></i>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  </div>
  )
}

export default YoungCategory