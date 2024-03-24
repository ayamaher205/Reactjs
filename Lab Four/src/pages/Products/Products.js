import ProductCard from "../../resuableComponents/ProductCard/ProductCard";
import data from '../../asssets/files/products.json'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Products = () => {
    const products = data; 
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          {products.map((e, index) => (
            <Grid xs={2} sm={4} md={3} key={index}>
              <Item><ProductCard product = {e}></ProductCard></Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
}

export default Products;
