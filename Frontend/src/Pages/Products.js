import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Pages/Products.css';

function Products(){
    return(
        <div className="whole">
      <div className='box'>

        <div className="p1">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.crsi.org/wp-content/uploads/black-bar-stacked.jpg"
                alt="STEEL"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TMT-Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-001
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: TMT-Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 2000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                  Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>


        <div className="p2">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse4.mm.bing.net/th?id=OIP.wHoftj1Y1ef7husWEecKjgHaE8&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Roller Bearing
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-172
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Roller Bearing 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1900 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p3">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://tse1.mm.bing.net/th?id=OIP.k9mebzXtWikNfLKNJl0uMAHaE7&pid=Api&P=0&h=180"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steel Rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-058
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel Rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>

        <div className="p4">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/premium-photo/industrial-background-big-size-steel-coil-stored-inside-industrial-warehouse-blue-toned-image_56854-2869.jpg?w=826"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steel Coil
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-079
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel Coil
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1700 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p5">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/premium-photo/iron-steel-store-warehouse-heavy-industry-background_7180-3160.jpg?size=626&ext=jpg&ga=GA1.2.1952704272.1678083418&semt=ais"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steel Pipe
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-099
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Steel Pipe
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1500 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p6">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/premium-photo/steel-metal-beam-3d_103577-1337.jpg?size=626&ext=jpg&ga=GA1.2.1952704272.1678083418&semt=ais"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Steel Bar 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-007
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name:  Steel Bar 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p7">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/construction-pvc-pipes-composition_23-2149106876.jpg?size=626&ext=jpg&ga=GA1.2.1952704272.1678083418&semt=ais"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PVC Pipes 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-077
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: PVC Pipes
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 2500 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p8">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/heap-bolts_144627-17681.jpg?size=626&ext=jpg&ga=GA1.1.1952704272.1678083418&semt=ais"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Screw
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-193
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Screw
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 4500 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p9">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-big-37050.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Hexagonal Wire Rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-163
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Hexagonal Wire Rod
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 3000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p10">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-big-37100.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Cold Rolled Coil (Strip)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-080
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Cold Rolled Coil (Strip)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 4700 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p11">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-medium-37031.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Peeled Bar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-151
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Peeled Bar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 5500 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p12">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-medium-37080.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Plate (N1)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-121
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Plate (N1)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 3900 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p13">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-medium-37024.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Reinforcement Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-133
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Reinforcement Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 7100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p14">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.profibusiness.world/image-medium-37020.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-188
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Wire
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 9000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p15">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.homestratosphere.com/wp-content/uploads/2019/08/Use-of-silicon-steel-870x512.jpg.webp"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Silicon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-145
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Silicon Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 8100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p16">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.homestratosphere.com/wp-content/uploads/2019/08/Use-of-manganese-steel-870x578.jpg.webp"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Manganese Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-173
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Manganese Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 1000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p17">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.homestratosphere.com/wp-content/uploads/2019/08/Use-of-tungsten-steel-870x535.jpg.webp"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Tungsten Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-145
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Tungsten Steel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 3755 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p18">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://previews.123rf.com/images/citadelle/citadelle1802/citadelle180200023/95155473-copper-scrap-market-of-raw-materials.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Raw Copper
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-124
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Raw Copper                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 5000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p19">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://5.imimg.com/data5/SELLER/Default/2022/1/VC/MS/TP/118719518/polished-brass-coil-500x500.jpg"
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Polished Brass Sheets
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-111
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Polished Brass Sheets
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 10000 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
        <div className="p20">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://media.istockphoto.com/id/502300201/photo/stack-of-aluminum-ingots.jpg?s=612x612&w=0&k=20&c=LFsVCYcX_NKWM37WtRMh7Cdv2zqZ_i_dB6guZPeMKNc="
                alt="STEEL"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Aluminium
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product ID: M-119
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Product Name: Aluminium
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity in Warehouse: 8100 KG
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to='/order'>
                <Button size="small" color="primary">
                Order Now 
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br></br>
        </div>
      </div>
    </div>
    );

}
export default Products;
    

