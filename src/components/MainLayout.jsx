import { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const MainLayout = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
  const [compactType, setCompactType] = useState('vertical');
  const [mounted, setMounted] = useState(false);
  const [layouts, setLayouts] = useState({ lg: generateLayout() });

  useEffect(() => {
    setMounted(true);
  }, []);

  const generateDOM = () => {
    return layouts.lg.map((l, i) => (
      <div
        key={i}
        className={`${l.static ? 'static' : ''} bg-red-500`}
      >
        {l.static ? (
          <span
            className="text"
            title="This item is static and cannot be removed or resized."
          >
            Static - {i}
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
      </div>
    ));
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  const onCompactTypeChange = () => {
    setCompactType((prevCompactType) => (prevCompactType === 'horizontal' ? 'vertical' : 'horizontal'));
  };

  const onLayoutChange = (layout, layouts) => {
    // Handle layout change here
  };

  const onNewLayout = () => {
    setLayouts({ lg: generateLayout() });
  };

  const onDrop = (layout, item, e) => {
    // alert(`Element parameters: ${JSON.stringify(item)}`);
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        className="layout "
        rowHeight={30}
        isBounded
        isResizable={false}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 820, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </div>
  );
};

function generateLayout() {
  const layout = [];
  for (let i = 0; i < 10; i++) {
    layout.push({
      x: i * 3,
      y: i * 6,
      w: 3,
      h: 3,
      i: i.toString(),
    });
  }
  return layout;
}

export default MainLayout;
