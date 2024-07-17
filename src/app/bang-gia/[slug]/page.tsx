import React from 'react'
interface IParams {
  slug: string;
}

export default function PriceBrand({ params }: { params: IParams }) {
  const { slug } = params;
  const list_slug = ['bang-gia-banh-givral', 'bang-gia-banh-brodard']
  if (list_slug[0] === slug) {
    return (
      <main>

        <table>
          <tbody>
            <tr>
              <td>
                <p><strong>STT</strong></p>
              </td>
              <td>
                <p><strong>TÊN BÁNH</strong></p>
              </td>
              <td colSpan={2}>
                <p><strong>150 gr</strong></p>
                <p><strong>(1 trứng)</strong></p>
              </td>
              <td colSpan={2}>
                <p><strong>200 gr</strong></p>
                <p><strong>(2 trứng)</strong></p>
              </td>
              <td colSpan={2}>
                <p><strong>250 gr</strong></p>
                <p><strong>(2 trứng)</strong></p>
              </td>
              <td colSpan={2}>
                <p><strong>300 gr</strong></p>
                <p><strong>(2 trứng)</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p><strong>Mã</strong></p>
              </td>
              <td>
                <p><strong>Giá</strong></p>
              </td>
              <td>
                <p><strong>Mã</strong></p>
              </td>
              <td>
                <p><strong>Giá</strong></p>
              </td>
              <td>
                <p><strong>Mã</strong></p>
              </td>
              <td>
                <p><strong>Giá</strong></p>
              </td>
              <td>
                <p><strong>Mã</strong></p>
              </td>
              <td>
                <p><strong>Giá</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>Thập cẩm gà quay vi cá yến sào</p>
              </td>
              <td>
                <p><strong>4D</strong></p>
              </td>
              <td>
                <p>369,000</p>
              </td>
              <td>
                <p><strong>4B</strong></p>
              </td>
              <td>
                <p>402,000</p>
              </td>
              <td>
                <p><strong>4A</strong></p>
              </td>
              <td>
                <p>430,000</p>
              </td>
              <td>
                <p><strong>XX</strong></p>
              </td>
              <td>
                <p>457,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>Thập cẩm gà quay vi cá đặc biệt</p>
              </td>
              <td>
                <p><strong>6D</strong></p>
              </td>
              <td>
                <p>259,000</p>
              </td>
              <td>
                <p><strong>6B</strong></p>
              </td>
              <td>
                <p>292,000</p>
              </td>
              <td>
                <p><strong>6A</strong></p>
              </td>
              <td>
                <p>330,000</p>
              </td>
              <td>
                <p><strong>AA</strong></p>
              </td>
              <td>
                <p>363,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>3</p>
              </td>
              <td>
                <p>Thập cẩm gà quay vi cá</p>
              </td>
              <td>
                <p><strong>2D</strong></p>
              </td>
              <td>
                <p>234,000</p>
              </td>
              <td>
                <p><strong>2B</strong></p>
              </td>
              <td>
                <p>256,000</p>
              </td>
              <td>
                <p><strong>2A</strong></p>
              </td>
              <td>
                <p>285,000</p>
              </td>
              <td>
                <p><strong>XA</strong></p>
              </td>
              <td>
                <p>319,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>4</p>
              </td>
              <td>
                <p>Thẩp cẩm gà quay</p>
              </td>
              <td>
                <p><strong>8D</strong></p>
              </td>
              <td>
                <p>170,000</p>
              </td>
              <td>
                <p><strong>8B</strong></p>
              </td>
              <td>
                <p>204,000</p>
              </td>
              <td>
                <p><strong>8A</strong></p>
              </td>
              <td>
                <p>232,000</p>
              </td>
              <td>
                <p><strong>XB</strong></p>
              </td>
              <td>
                <p>253,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>5</p>
              </td>
              <td>
                <p>Thập cẩm</p>
              </td>
              <td>
                <p><strong>3D</strong></p>
              </td>
              <td>
                <p>152,000</p>
              </td>
              <td>
                <p><strong>3B</strong></p>
              </td>
              <td>
                <p>187,000</p>
              </td>
              <td>
                <p><strong>3A</strong></p>
              </td>
              <td>
                <p>215,000</p>
              </td>
              <td>
                <p><strong>XC</strong></p>
              </td>
              <td>
                <p>237,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>6</p>
              </td>
              <td>
                <p>Thập cẩm ngũ nhân</p>
              </td>
              <td>
                <p><strong>17D</strong></p>
              </td>
              <td>
                <p>237,000</p>
              </td>
              <td>
                <p><strong>17B</strong></p>
              </td>
              <td>
                <p>264,000</p>
              </td>
              <td>
                <p><strong>17A</strong></p>
              </td>
              <td>
                <p>295,000</p>
              </td>
              <td>
                <p><strong>X6</strong></p>
              </td>
              <td>
                <p>353,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>7</p>
              </td>
              <td>
                <p>Thập cẩm gà quay bào ngư</p>
              </td>
              <td>
                <p><strong>27D</strong></p>
              </td>
              <td>
                <p>243,000</p>
              </td>
              <td>
                <p><strong>27B</strong></p>
              </td>
              <td>
                <p>270,000</p>
              </td>
              <td>
                <p><strong>27A</strong></p>
              </td>
              <td>
                <p>303,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>8</p>
              </td>
              <td>
                <p>Hạt sen</p>
              </td>
              <td>
                <p><strong>5D</strong></p>
              </td>
              <td>
                <p>138,000</p>
              </td>
              <td>
                <p><strong>5B</strong></p>
              </td>
              <td>
                <p>169,000</p>
              </td>
              <td>
                <p><strong>5A</strong></p>
              </td>
              <td>
                <p>186,000</p>
              </td>
              <td>
                <p><strong>X1</strong></p>
              </td>
              <td>
                <p>208,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>9</p>
              </td>
              <td>
                <p>Đậu xanh</p>
              </td>
              <td>
                <p><strong>7D</strong></p>
              </td>
              <td>
                <p>125,000</p>
              </td>
              <td>
                <p><strong>7B</strong></p>
              </td>
              <td>
                <p>148,000</p>
              </td>
              <td>
                <p><strong>7A</strong></p>
              </td>
              <td>
                <p>163,000</p>
              </td>
              <td>
                <p><strong>X2</strong></p>
              </td>
              <td>
                <p>179,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>10</p>
              </td>
              <td>
                <p>Đậu xanh sầu riêng</p>
              </td>
              <td>
                <p><strong>9D</strong></p>
              </td>
              <td>
                <p>133,000</p>
              </td>
              <td>
                <p><strong>9B</strong></p>
              </td>
              <td>
                <p>156,000</p>
              </td>
              <td>
                <p><strong>9A</strong></p>
              </td>
              <td>
                <p>171,000</p>
              </td>
              <td>
                <p><strong>XD</strong></p>
              </td>
              <td>
                <p>185,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>11</p>
              </td>
              <td>
                <p>Dừa hạt dưa</p>
              </td>
              <td>
                <p><strong>10D</strong></p>
              </td>
              <td>
                <p>128,000</p>
              </td>
              <td>
                <p><strong>10B</strong></p>
              </td>
              <td>
                <p>161,000</p>
              </td>
              <td>
                <p><strong>10A</strong></p>
              </td>
              <td>
                <p>172,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>Khoai môn</p>
              </td>
              <td>
                <p><strong>11D</strong></p>
              </td>
              <td>
                <p>144,000</p>
              </td>
              <td>
                <p><strong>11B</strong></p>
              </td>
              <td>
                <p>167,000</p>
              </td>
              <td>
                <p><strong>11A</strong></p>
              </td>
              <td>
                <p>188,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>13</p>
              </td>
              <td>
                <p>Trà xanh</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p><strong>16B</strong></p>
              </td>
              <td>
                <p>170,000</p>
              </td>
              <td>
                <p><strong>16A</strong></p>
              </td>
              <td>
                <p>189,000</p>
              </td>
              <td>
                <p><strong>X4</strong></p>
              </td>
              <td>
                <p>205,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>14</p>
              </td>
              <td>
                <p>Chocolate đậu phộng</p>
              </td>
              <td>
                <p><strong>18D</strong></p>
              </td>
              <td>
                <p>122,000</p>
              </td>
              <td>
                <p><strong>18B</strong></p>
              </td>
              <td>
                <p>149,000</p>
              </td>
              <td>
                <p><strong>18A</strong></p>
              </td>
              <td>
                <p>167,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>15</p>
              </td>
              <td>
                <p>Đậu đỏ</p>
              </td>
              <td>
                <p><strong>20D</strong></p>
              </td>
              <td>
                <p>122,000</p>
              </td>
              <td>
                <p><strong>20B</strong></p>
              </td>
              <td>
                <p>149,000</p>
              </td>
              <td>
                <p><strong>20A</strong></p>
              </td>
              <td>
                <p>167,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>16</p>
              </td>
              <td>
                <p>Chocolate - Cappuccino</p>
              </td>
              <td>
                <p><strong>28D</strong></p>
              </td>
              <td>
                <p>122,000</p>
              </td>
              <td>
                <p><strong>28B</strong></p>
              </td>
              <td>
                <p>149,000</p>
              </td>
              <td>
                <p><strong>28A</strong></p>
              </td>
              <td>
                <p>167,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>17</p>
              </td>
              <td>
                <p> Lá dứa</p>
              </td>
              <td>
                <p><strong>30D</strong></p>
              </td>
              <td>
                <p>132,000</p>
              </td>
              <td>
                <p><strong>30B</strong></p>
              </td>
              <td>
                <p>156,000</p>
              </td>
              <td>
                <p><strong>30A</strong></p>
              </td>
              <td>
                <p>175,000</p>
              </td>
              <td>
                <p><strong>X8</strong></p>
              </td>
              <td>
                <p>199,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>18</p>
              </td>
              <td>
                <p>Dừa - Lá Dứa</p>
              </td>
              <td>
                <p><strong>31D</strong></p>
              </td>
              <td>
                <p>146,000</p>
              </td>
              <td>
                <p><strong>31B</strong></p>
              </td>
              <td>
                <p>176,000</p>
              </td>
              <td>
                <p><strong>31A</strong></p>
              </td>
              <td>
                <p>193,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>19</p>
              </td>
              <td>
                <p>Dừa sầu riêng <strong>Mới</strong></p>
              </td>
              <td>
                <p><strong>32D</strong></p>
              </td>
              <td>
                <p>145,000</p>
              </td>
              <td>
                <p><strong>32B</strong></p>
              </td>
              <td>
                <p>168,000</p>
              </td>
              <td>
                <p><strong>32A</strong></p>
              </td>
              <td>
                <p>188,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>20</p>
              </td>
              <td>
                <p>Táo đỏ <strong>Mới</strong></p>
              </td>
              <td>
                <p><strong>33D</strong></p>
              </td>
              <td>
                <p>152,000</p>
              </td>
              <td>
                <p><strong>33B</strong></p>
              </td>
              <td>
                <p>187,000</p>
              </td>
              <td>
                <p><strong>33A</strong></p>
              </td>
              <td>
                <p>215,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td colSpan={10}>
                <p><strong>BÁNH KHÔNG TRỨNG (CÓ THỂ DÙNG CHAY)</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>21</p>
              </td>
              <td>
                <p>Đậu xanh (0 trứng)</p>
              </td>
              <td>
                <p><strong>12D</strong></p>
              </td>
              <td>
                <p>99,000</p>
              </td>
              <td>
                <p><strong>12B</strong></p>
              </td>
              <td>
                <p>121,000</p>
              </td>
              <td>
                <p><strong>12A</strong></p>
              </td>
              <td>
                <p>140,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>22</p>
              </td>
              <td>
                <p>Hạt sen (0 trứng)</p>
              </td>
              <td>
                <p><strong>13D</strong></p>
              </td>
              <td>
                <p>113,000</p>
              </td>
              <td>
                <p><strong>13B</strong></p>
              </td>
              <td>
                <p>143,000</p>
              </td>
              <td>
                <p><strong>13A</strong></p>
              </td>
              <td>
                <p>161,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>23</p>
              </td>
              <td>
                <p>Đậu đỏ (0 trứng)</p>
              </td>
              <td>
                <p><strong>14D</strong></p>
              </td>
              <td>
                <p>110,000</p>
              </td>
              <td>
                <p><strong>14B</strong></p>
              </td>
              <td>
                <p>128,000</p>
              </td>
              <td>
                <p><strong>14A</strong></p>
              </td>
              <td>
                <p>148,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>24</p>
              </td>
              <td>
                <p>Khoai môn (0 trứng)</p>
              </td>
              <td>
                <p><strong>26D</strong></p>
              </td>
              <td>
                <p>116,000</p>
              </td>
              <td>
                <p><strong>26B</strong></p>
              </td>
              <td>
                <p>147,000</p>
              </td>
              <td>
                <p><strong>26A</strong></p>
              </td>
              <td>
                <p>165,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>25</p>
              </td>
              <td>
                <p>Thập Cẩm Chay (0 trứng)</p>
              </td>
              <td>
                <p><strong>29D</strong></p>
              </td>
              <td>
                <p>163,000</p>
              </td>
              <td>
                <p><strong>29B</strong></p>
              </td>
              <td>
                <p>186,000</p>
              </td>
              <td>
                <p><strong>29A</strong></p>
              </td>
              <td>
                <p>213,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>26</p>
              </td>
              <td>
                <p>Dẻo đậu xanh (0 trứng)</p>
              </td>
              <td>
                <p><strong>D11</strong></p>
              </td>
              <td>
                <p>111,000</p>
              </td>
              <td>
                <p><strong>D1</strong></p>
              </td>
              <td>
                <p>118,000</p>
              </td>
              <td>
                <p><strong>D2</strong></p>
              </td>
              <td>
                <p>128,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>27</p>
              </td>
              <td>
                <p>Dẻo hạt sen (0 trứng)</p>
              </td>
              <td>
                <p><strong>D12</strong></p>
              </td>
              <td>
                <p>131,000</p>
              </td>
              <td>
                <p><strong>D5</strong></p>
              </td>
              <td>
                <p>149,000</p>
              </td>
              <td>
                <p><strong>D6</strong></p>
              </td>
              <td>
                <p>155,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>28</p>
              </td>
              <td>
                <p>Dẻo lá dứa (0 trứng)</p>
              </td>
              <td>
                <p><strong>D13</strong></p>
              </td>
              <td>
                <p>113,000</p>
              </td>
              <td>
                <p><strong>D9</strong></p>
              </td>
              <td>
                <p>121,000</p>
              </td>
              <td>
                <p><strong>D10</strong></p>
              </td>
              <td>
                <p>134,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>29</p>
              </td>
              <td>
                <p>Dẻo trà xanh (0 trứng)</p>
              </td>
              <td>
                <p><strong>D14</strong></p>
              </td>
              <td>
                <p>148,000</p>
              </td>
              <td>
                <p><strong>D3</strong></p>
              </td>
              <td>
                <p>158,000</p>
              </td>
              <td>
                <p><strong>D4</strong></p>
              </td>
              <td>
                <p>163,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>30</p>
              </td>
              <td>
                <p>Dẻo khoai môn (0 trứng)</p>
              </td>
              <td>
                <p><strong>D15</strong></p>
              </td>
              <td>
                <p>114,000</p>
              </td>
              <td>
                <p><strong>D7</strong></p>
              </td>
              <td>
                <p>121,000</p>
              </td>
              <td>
                <p><strong>D8</strong></p>
              </td>
              <td>
                <p>132,000</p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td >
                <p><strong>BÁNH TRĂNG</strong> <strong>SẮC MÀU</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>01</p>
              </td>
              <td>
                <p>Trà xanh (1 trứng)</p>
              </td>
              <td>
                <p><strong>16D</strong></p>
              </td>
              <td>
                <p>155,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>02</p>
              </td>
              <td>
                <p>Blueberry (0 trứng)</p>
              </td>
              <td>
                <p><strong>21D</strong></p>
              </td>
              <td>
                <p>204,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>03</p>
              </td>
              <td>
                <p>Raspberry (0 trứng)</p>
              </td>
              <td>
                <p><strong>22D</strong></p>
              </td>
              <td>
                <p>204,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>04</p>
              </td>
              <td>
                <p>Chocolate (0 trứng)</p>
              </td>
              <td>
                <p><strong>23D</strong></p>
              </td>
              <td>
                <p>166,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>05</p>
              </td>
              <td>
                <p>Phô mai (0 trứng)</p>
              </td>
              <td>
                <p><strong>24D</strong></p>
              </td>
              <td>
                <p>166,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>06</p>
              </td>
              <td>
                <p>Cranberry (0 trứng)</p>
              </td>
              <td>
                <p><strong>25D</strong></p>
              </td>
              <td>
                <p>204,000</p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p><strong> </strong></p>
              </td>
              <td>
                <p> </p>
              </td>
              <td>
                <p> </p>
              </td>
            </tr>
            <tr>
              <td colSpan={10}>
                <p><strong>MẪU HỘP GIVRAL 2024 CÓ PHỤ THU PHÍ</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><strong>STT</strong></p>
              </td>
              <td>
                <p><strong>TÊN HỘP</strong></p>
              </td>
              <td colSpan={4}>
                <p><strong>ĐVT</strong></p>
              </td>
              <td colSpan={4}>
                <p><strong>GIÁ</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>HỘP ĐẶC BIỆT</p>
              </td>
              <td colSpan={4}>
                <p>Hộp</p>
              </td>
              <td colSpan={4}>
                <p>350,000</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>HỘP 6 BÁNH</p>
              </td>
              <td colSpan={4}>
                <p>Hộp</p>
              </td>
              <td colSpan={4}>
                <p>50,000</p>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    )
  } else if (list_slug[1] === slug) {
    return (
      <main>

<table>
  <tbody>
    <tr>
      <td>
        <p><strong>STT</strong></p>
      </td>
      <td>
        <p><strong>Mã hàng</strong>Item code</p>
      </td>
      <td>
        <p><strong>Tên hàng hóa</strong></p>
      </td>
      <td>
        <p><strong>Trọng lượng</strong> (Gram)</p>
      </td>
      <td>
        <p><strong>Đơn vị tính </strong> (Unit)</p>
      </td>
      <td>
        <p><strong>Giá bán lẻ (có VAT)</strong>Unit selling price (incl.VAT)</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NHÓM 1</strong></p>
      </td>
      <td>
        <p><strong>Bánh Trung Thu Nhân mặn (có trứng)</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>1A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>4</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>1B</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>5</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>3B</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>2</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>9A</p>
      </td>
      <td>
        <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>3</strong><strong>4</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>9B</p>
      </td>
      <td>
        <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>30</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>7</p>
      </td>
      <td>
        <p>13A</p>
      </td>
      <td>
        <p>Bánh trung thu Gà Quay Vi Cá (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>400</strong><strong>,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>8</p>
      </td>
      <td>
        <p>13B</p>
      </td>
      <td>
        <p>Bánh trung thu Gà Quay Vi Cá (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>3</strong><strong>30</strong><strong>,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>9</p>
      </td>
      <td>
        <p>17A</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>3</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>10</p>
      </td>
      <td>
        <p>17B</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>26</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>11</p>
      </td>
      <td>
        <p>19A</p>
      </td>
      <td>
        <p>Bánh trung thu Yến Sào Táo Đỏ Ngũ Hạt (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>410,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>12</p>
      </td>
      <td>
        <p>19B</p>
      </td>
      <td>
        <p>Bánh trung thu Yến Sào Táo Đỏ Ngũ Hạt (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>350,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>13</p>
      </td>
      <td>
        <p>21A</p>
      </td>
      <td>
        <p>Bánh trung thu Sò Điệp Xốt XO (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>400,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>14</p>
      </td>
      <td>
        <p>21B</p>
      </td>
      <td>
        <p>Bánh trung thu Sò Điệp Xốt XO (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>340,000</strong></p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NHÓM 2</strong></p>
      </td>
      <td>
        <p><strong>Bánh Trung Thu Chay</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p> </p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>4A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Trà Xanh Chay</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>4B</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Trà Xanh Chay</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>9</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>8A</p>
      </td>
      <td>
        <p>Bánh trung thu Đậu Xanh Chay</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>9</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>8B</p>
      </td>
      <td>
        <p>Bánh trung thu Đậu Xanh Chay</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>7</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NHÓM 3</strong></p>
      </td>
      <td>
        <p><strong>Bánh Trung Thu Nhân Ngọt không trứng</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>12A</p>
      </td>
      <td>
        <p>Bánh trung thu Tiramisu</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>8</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>12B</p>
      </td>
      <td>
        <p>Bánh trung thu Tiramisu</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>3</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>8</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>24B</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>3</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p>Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>250,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>26B</p>
      </td>
      <td>
        <p>Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>210,000</strong></p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NHÓM 4</strong></p>
      </td>
      <td>
        <p><strong> Bánh Trung Thu Nhân Ngọt (có trứng)</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>42A</p>
      </td>
      <td>
        <p>Bánh trung thu Khoai Môn (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>42B</p>
      </td>
      <td>
        <p>Bánh trung thu Khoai Môn (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>9</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>48A</p>
      </td>
      <td>
        <p>Bánh trung thu Sầu Riêng 6 Ri (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>48B</p>
      </td>
      <td>
        <p>Bánh trung thu Sầu Riêng 6 Ri (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>9</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>52A</p>
      </td>
      <td>
        <p>Bánh trung thu Đậu Xanh (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>20</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>52B</p>
      </td>
      <td>
        <p>Bánh trung thu Đậu Xanh (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>1</strong><strong>8</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>7</p>
      </td>
      <td>
        <p>54A</p>
      </td>
      <td>
        <p>Bánh trung thu Mè Đen (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>240,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>8</p>
      </td>
      <td>
        <p>54B</p>
      </td>
      <td>
        <p>Bánh trung thu Mè Đen (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>200,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>9</p>
      </td>
      <td>
        <p>64A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Lá Dứa Hạnh Nhân (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>4</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>10</p>
      </td>
      <td>
        <p>64B</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Lá Dứa Hạnh Nhân (2 trứng)</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>2</strong><strong>1</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>11</p>
      </td>
      <td>
        <p>68A</p>
      </td>
      <td>
        <p>Bánh trung thu Espresso Kim Sa Lava</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>260,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>12</p>
      </td>
      <td>
        <p>68B</p>
      </td>
      <td>
        <p>Bánh trung thu Espresso Kim Sa Lava</p>
      </td>
      <td>
        <p>200 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td>
        <p><strong>220,000</strong></p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NHÓM 5</strong></p>
      </td>
      <td colSpan={4}>
        <p><strong>CÁC COMBO BÁNH TRUNG THU</strong></p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>HS1</strong></p>
      </td>
      <td>
        <p><strong>HƯƠNG SẮC BỐN MÙA 1</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>8</strong><strong>9</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>1A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>42A</p>
      </td>
      <td>
        <p>Bánh trung thu Khoai Môn (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>210,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>8A</p>
      </td>
      <td>
        <p>Bánh trung thu Đậu Xanh Chay</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>190,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>HS2</strong></p>
      </td>
      <td>
        <p><strong>HƯƠNG SẮC BỐN MÙA 2</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>9</strong><strong>5</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>1A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p> Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>48A</p>
      </td>
      <td>
        <p>Bánh trung thu Sầu Riêng 6 Ri (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>210,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>HS3</strong></p>
      </td>
      <td>
        <p><strong>HƯƠNG SẮC BỐN MÙA 3</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>1,0</strong><strong>70,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>9A</p>
      </td>
      <td>
        <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>340,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>54A</p>
      </td>
      <td>
        <p>Bánh trung thu Mè Đen (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>64A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Lá Dứa Hạnh Nhân (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>HS4</strong></p>
      </td>
      <td>
        <p><strong>HƯƠNG SẮC BỐN MÙA 4</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>1,210,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>21A</p>
      </td>
      <td>
        <p>Bánh trung thu Sò Điệp Xốt XO (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>400,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>12A</p>
      </td>
      <td>
        <p>Bánh trung thu Tiramisu</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>280,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>280,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>DN1</strong></p>
      </td>
      <td>
        <p><strong>DẠ NGUYỆT ĐOÀN VIÊN 1</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>1,5</strong><strong>3</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>1A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>9A</p>
      </td>
      <td>
        <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>340,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p> Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>48A</p>
      </td>
      <td>
        <p>Bánh trung thu Sầu Riêng 6 Ri (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>210,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>64A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạt Sen Lá Dứa Hạnh Nhân (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>240,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>DN2</strong></p>
      </td>
      <td>
        <p><strong>DẠ NGUYỆT ĐOÀN VIÊN 2</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>1,6</strong><strong>5</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>3A</p>
      </td>
      <td>
        <p>Bánh trung thu Thập Cẩm Gà Quay (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>250,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>9A</p>
      </td>
      <td>
        <p>Bánh trung thu Tom Yum Hải Sản (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>340,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>17A</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>310,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>42A</p>
      </td>
      <td>
        <p>Bánh trung thu Khoai Môn (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>210,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>68A</p>
      </td>
      <td>
        <p>Bánh trung thu Espresso Kim Sa Lava</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>260,000</p>
      </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p> Cái</p>
      </td>
      <td>
        <p>280,000</p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NS1</strong></p>
      </td>
      <td>
        <p><strong>NON SÔNG GẤM VÓC - MẬT ONG</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>3,</strong><strong>10</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>17A</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>19A</p>
      </td>
      <td>
        <p>Bánh trung thu Yến Sào Táo Đỏ Ngũ Hạt (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p> Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>7</p>
      </td>
      <td>
        <p>M1</p>
      </td>
      <td>
        <p>Mật ong Hoa chôm chôm 189 ml</p>
      </td>
      <td>
        <p>189 ml</p>
      </td>
      <td>
        <p>Lọ</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>8</p>
      </td>
      <td>
        <p>M2</p>
      </td>
      <td>
        <p>Mật ong Hoa cà phê 189 ml</p>
      </td>
      <td>
        <p>189 ml</p>
      </td>
      <td>
        <p>Lọ</p>
      </td>
      <td>
        <p> </p>
      </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NS2</strong></p>
      </td>
      <td>
        <p><strong>NON SÔNG GẤM VÓC - NHÂN SÂM</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>3,</strong><strong>50</strong><strong>0,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>17A</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>19A</p>
      </td>
      <td>
        <p>Bánh trung thu Yến Sào Táo Đỏ Ngũ Hạt (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p> Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>7</p>
      </td>
      <td>
        <p>HQ07</p>
      </td>
      <td>
        <p>Nhân Sâm Wisconsin Cắt Lát Hộp 50 g</p>
      </td>
      <td>
        <p>50 g</p>
      </td>
      <td>
        <p>Hộp</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td colSpan={2}>
        <p><strong>NS3</strong></p>
      </td>
      <td>
        <p><strong>NON SÔNG GẤM VÓC - YẾN SÀO</strong></p>
      </td>
      <td>
        <p> </p>
      </td>
      <td>
        <p><strong> </strong></p>
      </td>
      <td>
        <p><strong>6,600,000</strong></p>
      </td>
    </tr>
    <tr>
      <td>
        <p>1</p>
      </td>
      <td>
        <p>17A</p>
      </td>
      <td>
        <p>Bánh trung thu Hải Sản Xốt Bào Ngư (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>2</p>
      </td>
      <td>
        <p>19A</p>
      </td>
      <td>
        <p>Bánh trung thu Yến Sào Táo Đỏ Ngũ Hạt (2 trứng)</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>3</p>
      </td>
      <td>
        <p>24A</p>
      </td>
      <td>
        <p>Bánh trung thu Hạnh Nhân Phô Mai Việt Quất Hoa Kỳ</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>4</p>
      </td>
      <td>
        <p>26A</p>
      </td>
      <td>
        <p> Bánh trung thu Ô Long Hạt Sen</p>
      </td>
      <td>
        <p>250 g</p>
      </td>
      <td>
        <p>Cái</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>5</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>6</p>
      </td>
      <td>
        <p>TR100</p>
      </td>
      <td>
        <p>Trà Oolong 100 gram</p>
      </td>
      <td>
        <p>100 g</p>
      </td>
      <td>
        <p>Gói</p>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td>
        <p>7</p>
      </td>
      <td>
        <p>Y1</p>
      </td>
      <td>
        <p>Tổ Yến SGAP TCL1 - 50 g</p>
      </td>
      <td>
        <p>50 g</p>
      </td>
      <td>
        <p>Hộp</p>
      </td>
      <td> </td>
    </tr>
  </tbody>
</table>
      </main>
    )
  }

}
