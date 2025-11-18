import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Homepage from './pages/Homepage';
import Painting from './pages/Painting';
import GeneralContractor from './pages/GeneralContractor';
import Remodeler from './pages/Remodeler';
import ConstructionCompany from './pages/ConstructionCompany';
import InteriorPainting from './pages/services/InteriorPainting';
import ExteriorPainting from './pages/services/ExteriorPainting';
import ResidentialPainting from './pages/services/ResidentialPainting';
import CommercialPainting from './pages/services/CommercialPainting';
import WallpaperRemoval from './pages/services/WallpaperRemoval';
import CabinetPainting from './pages/services/CabinetPainting';
import DeckStaining from './pages/services/DeckStaining';
import FencePainting from './pages/services/FencePainting';
import DrywallRepair from './pages/services/DrywallRepair';
import PopcornCeilingRemoval from './pages/services/PopcornCeilingRemoval';
import WallpaperInstallation from './pages/services/WallpaperInstallation';
import EpoxyFloorCoating from './pages/services/EpoxyFloorCoating';
import PressureWashing from './pages/services/PressureWashing';
import StuccoPainting from './pages/services/StuccoPainting';
import TrimAndMoldingPainting from './pages/services/TrimAndMoldingPainting';
import CeilingPainting from './pages/services/CeilingPainting';
import FenceStaining from './pages/services/FenceStaining';
import ColorConsultation from './pages/services/ColorConsultation';
import PaintTouchUps from './pages/services/PaintTouchUps';
import WallPainting from './pages/services/WallPainting';
import OfficePainting from './pages/services/OfficePainting';
import FauxFinishes from './pages/services/FauxFinishes';
import PowerWashing from './pages/services/PowerWashing';
import WoodStaining from './pages/services/WoodStaining';
import MetalPainting from './pages/services/MetalPainting';
import DoorPainting from './pages/services/DoorPainting';
import PaintStripping from './pages/services/PaintStripping';
import CrownMoldingPainting from './pages/services/CrownMoldingPainting';
import AccentWallPainting from './pages/services/AccentWallPainting';
import TexturePainting from './pages/services/TexturePainting';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { contentOutline } from './content/outline';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/homepage',
    element: <Homepage />,
  },
  {
    path: '/painting',
    element: <Painting />,
  },
  {
    path: '/general-contractor',
    element: <GeneralContractor />,
  },
  {
    path: '/remodeler',
    element: <Remodeler />,
  },
  {
    path: '/construction-company',
    element: <ConstructionCompany />,
  },
  { path: '/services/interior-painting', element: <InteriorPainting /> },
  { path: '/services/exterior-painting', element: <ExteriorPainting /> },
  { path: '/services/residential-painting', element: <ResidentialPainting /> },
  { path: '/services/commercial-painting', element: <CommercialPainting /> },
  { path: '/services/wallpaper-removal', element: <WallpaperRemoval /> },
  { path: '/services/cabinet-painting', element: <CabinetPainting /> },
  { path: '/services/deck-staining', element: <DeckStaining /> },
  { path: '/services/fence-painting', element: <FencePainting /> },
  { path: '/services/drywall-repair', element: <DrywallRepair /> },
  { path: '/services/popcorn-ceiling-removal', element: <PopcornCeilingRemoval /> },
  { path: '/services/wallpaper-installation', element: <WallpaperInstallation /> },
  { path: '/services/epoxy-floor-coating', element: <EpoxyFloorCoating /> },
  { path: '/services/pressure-washing', element: <PressureWashing /> },
  { path: '/services/stucco-painting', element: <StuccoPainting /> },
  { path: '/services/trim-and-molding-painting', element: <TrimAndMoldingPainting /> },
  { path: '/services/ceiling-painting', element: <CeilingPainting /> },
  { path: '/services/fence-staining', element: <FenceStaining /> },
  { path: '/services/color-consultation', element: <ColorConsultation /> },
  { path: '/services/paint-touch-ups', element: <PaintTouchUps /> },
  { path: '/services/wall-painting', element: <WallPainting /> },
  { path: '/services/office-painting', element: <OfficePainting /> },
  { path: '/services/faux-finishes', element: <FauxFinishes /> },
  { path: '/services/power-washing', element: <PowerWashing /> },
  { path: '/services/wood-staining', element: <WoodStaining /> },
  { path: '/services/metal-painting', element: <MetalPainting /> },
  { path: '/services/door-painting', element: <DoorPainting /> },
  { path: '/services/paint-stripping', element: <PaintStripping /> },
  { path: '/services/crown-molding-painting', element: <CrownMoldingPainting /> },
  { path: '/services/accent-wall-painting', element: <AccentWallPainting /> },
  { path: '/services/texture-painting', element: <TexturePainting /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);