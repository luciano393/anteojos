import React from 'react'
import Item from '../components/Item'

const LentesContacto = () => {
  const url = "https://ik.imagekit.io/0lswtnkkmck/Anteojos%20de%20Sol/%20%20%20"
    const products = [
          "(9)_AfLMcPrMl.jpeg?updatedAt=1691939398394",
          "(7)_WrqQnjl3D.jpeg?updatedAt=1691939398323",
          "(8)_TgpFfwNTS.jpeg?updatedAt=1691939398322",
          "(5)_2hz7dxwBIG.jpeg?updatedAt=1691939391551",
          "(4)_1YNLG_34H.jpeg?updatedAt=1691939391489",
          "(6)_INZQQR9oxX.jpeg?updatedAt=1691939391459",
          "(33)_7ACnqe_XR.jpeg?updatedAt=1691939391436",
          "(33)_7ACnqe_XR.jpeg?updatedAt=1691939391436",
          "(30)_oeRkmvscW.jpeg?updatedAt=1691939391349"
    ]

    return (
      <div className='page-wrapper'>
        <h2 className='title-section'>Lentes de contacto</h2>
        <div className='products'>
                  <Item url={url.concat(products[0])}/>
                  <Item url={url.concat(products[2])}/>
                  <Item url={url.concat(products[1])}/>
                  <Item url={url.concat(products[3])}/>
                  <Item url={url.concat(products[4])}/>
                  <Item url={url.concat(products[5])}/>
                  <Item url={url.concat(products[6])}/>
                  <Item url={url.concat(products[7])}/>
                  <Item url={url.concat(products[8])}/>
              </div>
      </div>
    )
}

export default LentesContacto