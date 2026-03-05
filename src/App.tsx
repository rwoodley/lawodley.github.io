import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const NAV_LINKS = ['Books', 'News & Events', 'About', 'Contact']

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: '0.05em' }}
          >
            L. A. Woodley
          </Typography>
          <IconButton
            size="large"
            edge="end"
            aria-label="navigation menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation">
          <List>
            {NAV_LINKS.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src="/tridents-keep.png"
          alt="Trident's Keep by L. A. Woodley — book cover"
          sx={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 2,
            boxShadow: 6,
          }}
        />
      </Container>
    </Box>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box component="footer" sx={{ py: 3, borderTop: '1px solid', borderColor: 'divider' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {year} L. A. Woodley. All rights reserved.
      </Typography>
    </Box>
  )
}

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  )
}
