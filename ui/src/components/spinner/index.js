import React from 'react'
import styled, { keyframes } from 'styled-components'
import { layout } from 'styled-system'
import PropTypes from 'prop-types'

const fall = keyframes`
  100% {
    transform: translateY(0);
  }
`

const swim = keyframes`
  0% {
    transform: scaleX(1) translateX(10px);
  }
  49.99999% {
    transform: scaleX(1) translateX(0);
  }
  50% {
    transform: scaleX(-1) translateX(0);
  }
  100% {
    transform: scaleX(-1) translateX(-10px);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  align-items: center;
  justify-items: center;
`

const Container = styled.div`
  ${layout}

  #bubbles-top-layer {
    will-change: transform;
    transform: translateY(-200px);
    animation: ${fall} 1.5s infinite linear;
  }

  #bubbles-bottom-layer {
    will-change: transform;
    transform: translateY(-200px);
    animation: ${fall} 1.5s infinite linear;
  }

  #jellyfish #body {
    will-change: transform;
    transform-origin: center center;
    transform: scaleX(-1);
    animation: ${swim} 0.35s infinite linear;
  }
`

const LoadingSpinner = ({ withFace, size, color, ...props }) => (
  <Overlay>
    <Container size={size}>
      <svg viewBox="0 0 100 100">
        <g fill={color} fillOpacity="0.8">
          <g id="bubbles-top-layer">
            <circle cx="15" cy="30" r="3" />
            <circle cx="5" cy="250" r="5" />
            <circle cx="15" cy="200" r="3" />
            <circle cx="67" cy="170" r="4" />
            <circle cx="76" cy="80" r="3" />
            <circle cx="89" cy="100" r="4" />
          </g>
        </g>
        <g fill={color} fillOpacity="0.5">
          <g id="bubbles-bottom-layer">
            <circle cx="53" cy="60" r="2" />
            <circle cx="8" cy="160" r="3" />
            <circle cx="20" cy="120" r="4" />
            <circle cx="59" cy="400" r="2" />
            <circle cx="75" cy="140" r="4" />
            <circle cx="92" cy="180" r="3" />
            <circle cx="96" cy="40" r="2" />
          </g>
        </g>
        <svg id="jellyfish" width="50%" x="25" viewBox="0 0 100 100" {...props}>
          <path
            fill={color}
            id="body"
            d="m 28.966798,96.423396 c -1.645212,-1.645212 -1.37554,-3.10933 1.092174,-5.929359 2.388214,-2.729129 4.227847,-6.041803 4.227847,-7.613107 0,-1.386482 -1.893155,-3.214073 -5.306971,-5.123185 -3.424502,-1.915113 -5.382936,-3.830718 -6.82429,-6.675061 -1.387585,-2.738329 -1.273128,-5.78463 0.350358,-9.318083 l 1.107589,-2.410956 -2.093399,-0.448937 C 14.940895,57.493711 9.9344654,52.220597 8.8504583,45.560065 8.3750313,42.638992 8.9692094,36.469811 10.13668,32.203421 13.110564,21.336492 20.724305,11.958645 31.003467,6.5018516 37.772179,2.9086062 46.727896,1.1491586 53.927394,1.9982537 63.97765,3.1835355 72.383701,7.1852606 79.135269,13.998429 86.02193,20.948005 89.995434,29.169292 91.112744,38.780146 92.17229,47.894085 89.036488,54.369181 81.95932,57.681005 79.619792,58.7758 78.545296,59.00143 74.748707,59.195216 l -4.461397,0.227836 -1.453654,1.773969 c -1.819677,2.220699 -3.297416,5.501358 -2.958723,6.568525 0.361309,1.137918 2.832815,3.214309 5.336279,4.482905 4.740842,2.402371 8.015308,6.764604 8.0223,10.687365 0.0084,3.920175 -2.264234,8.342759 -6.42686,12.514342 -2.405813,2.410985 -3.859889,2.633443 -5.631601,0.861731 -1.555011,-1.555019 -1.246596,-2.843665 1.458626,-6.09431 3.640402,-4.374398 4.598419,-7.141713 3.17563,-9.173004 -0.353723,-0.50508 -2.257499,-1.893412 -4.230583,-3.085194 -3.853446,-2.327585 -6.066267,-4.639477 -7.230284,-7.553842 -1.011153,-2.531607 -0.664588,-6.577196 0.785702,-9.172032 l 1.081224,-1.934577 h -5.473057 -5.473094 l -1.666397,2.108135 c -0.916488,1.159474 -2.000248,2.982394 -2.408335,4.050911 -0.719124,1.883062 -0.716302,1.977934 0.09138,3.086608 0.458415,0.629137 2.062484,1.935741 3.564645,2.903658 4.988321,3.214073 6.111959,4.187547 7.530699,6.524282 1.280625,2.109191 1.393482,2.565121 1.255903,5.073828 -0.0998,1.821005 -0.522165,3.547881 -1.244617,5.088728 -1.344247,2.867151 -5.726309,8.123337 -7.20632,8.643824 -1.63999,0.576752 -3.22663,-0.0043 -3.979525,-1.462125 -0.844481,-1.63304 -0.520823,-2.679329 1.517833,-4.906993 2.085941,-2.279377 3.61371,-4.723384 4.136761,-6.617768 0.339415,-1.228732 0.273722,-1.755269 -0.344879,-2.77275 -0.690031,-1.134667 -5.276193,-4.333833 -6.212732,-4.333833 -0.78283,0 -4.35249,-3.949368 -5.200721,-5.75388 -1.471554,-3.130587 -1.08216,-7.604435 0.910974,-10.466443 l 0.812138,-1.166182 h -5.470443 -5.470401 l -1.765733,2.3833 c -2.148478,2.899929 -2.950387,5.24175 -2.290678,6.689611 0.253922,0.557287 1.631519,1.749397 3.061387,2.649135 1.429861,0.899746 3.427031,2.165406 4.43819,2.812651 1.011153,0.647187 2.56865,2.236956 3.461096,3.532774 1.424811,2.068741 1.643068,2.717429 1.790162,5.320357 0.1537,2.718815 0.04207,3.219216 -1.35314,6.041131 -1.971227,3.988583 -6.339181,8.736538 -8.037243,8.736538 -0.688802,0 -1.615276,-0.433972 -2.22217,-1.040888 z"
          />
          {withFace && (
            <>
              <path
                fill="#fff"
                d="m 49.389638,50.308606 c -3.707024,-0.07791 -9.671426,-3.804082 -7.904343,-6.184767 1.767083,-2.38062 3.180437,1.169032 7.973493,1.166268 4.793049,-0.0029 5.773301,-3.462867 7.835193,-1.166268 2.061898,2.296664 -4.197269,6.262467 -7.904343,6.184767 z"
              />
              <path
                fill="#fff"
                d="m 62.646095,30.270909 a 4.5043927,5.8971088 0 0 1 -4.504383,5.897109 4.5043927,5.8971088 0 0 1 -4.504434,-5.897109 4.5043927,5.8971088 0 0 1 4.504434,-5.897109 4.5043927,5.8971088 0 0 1 4.504383,5.897109 z"
              />
              <path
                fill="#fff"
                d="m 45.229169,30.131387 a 4.5043927,5.8971088 0 0 1 -4.50439,5.897109 4.5043927,5.8971088 0 0 1 -4.504384,-5.897109 4.5043927,5.8971088 0 0 1 4.504384,-5.897109 4.5043927,5.8971088 0 0 1 4.50439,5.897109 z"
              />
            </>
          )}
        </svg>
      </svg>
    </Container>
  </Overlay>
)

LoadingSpinner.propTypes = {
  withFace: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
}

LoadingSpinner.defaultProps = {
  withFace: false,
  size: 90,
  color: '#eee',
}

export default LoadingSpinner
