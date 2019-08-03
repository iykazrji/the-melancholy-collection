import React, { useState, useEffect } from "react";
import ImagesLoaded from "react-images-loaded";
import InfiniteScroll from "react-infinite-scroll-component";
import uniqid from "uniqid";
import { getListOfPhotos } from "api";
import { unsplash_access_key } from "config";

// Loading Icon
import loadingIcon from "assets/icons/double-ring-loading.svg";
import {
  SectionWrapper,
  ImageGridContainer,
  ImageGridLayer,
  ImageContentColumn,
  ImageContainer,
  ImageWrapper,
  ImageGridWrapper,
  LoadingIconContainer
} from "./section-2-styles";

function chunkArray(arr, n) {
  var rest = arr.length % n, // how much to divide
    restUsed = rest, // to keep track of the division over the elements
    partLength = Math.floor(arr.length / n),
    result = [];

  for (var i = 0; i < arr.length; i += partLength) {
    var end = partLength + i,
      add = false;

    if (rest !== 0 && restUsed) {
      // should add one element for the division
      end++;
      restUsed--; // we've used one division element now
      add = true;
    }

    result.push(arr.slice(i, end)); // part of the array

    if (add) {
      i++; // also increment i in the case we added an extra element for division
    }
  }

  return result;
}

const RenderToColumn = chunk => {
  return chunk.map((chunkItem, index) => {
    return (
      <ImageContainer key={chunkItem.id}>
        <ImageWrapper>
          <img src={chunkItem.url} alt={`Item - ${index}`} />
        </ImageWrapper>
      </ImageContainer>
    );
  });
};
const RenderImages = photos => {
  // Separate array into chunks
  return photos.map(photosArray => {
    let chunkedPhotos = chunkArray(photosArray, 3);
    return (
      <ImageGridLayer key={uniqid()}>
        {chunkedPhotos.map(chunk => {
          return (
            <ImageContentColumn key={uniqid()}>
              {RenderToColumn(chunk)}
            </ImageContentColumn>
          );
        })}
      </ImageGridLayer>
    );
  });
};
const Section2 = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Get initial photos
    // setLoading(true);
    getListOfPhotos({
      url: `https://api.unsplash.com/collections/148984/photos/?client_id=${unsplash_access_key}`,
      numOfPhotos: 27
    })
      .then(photosList => {
        setLoading(false);
        setCurrentPage(currentPage + 1);
        setPhotos([...photos, photosList]);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const onLoadingProgress = () => {};
  const onLoadingComplete = () => {
    setLoading(false);
  };
  return (
    <SectionWrapper>
      <ImagesLoaded
        handleOnProgress={onLoadingProgress}
        handleDone={onLoadingComplete}>
        <ImageGridContainer>
          {loading ? (
            <div>
              <LoadingIconContainer>
                <img src={loadingIcon} alt="loading-icon" />
              </LoadingIconContainer>
            </div>
          ) : (
            <InfiniteScroll
              dataLength={photos.length}
              hasMore={true}
              next={() => {
                getListOfPhotos({
                  url: `https://api.unsplash.com/collections/148984/photos/?client_id=${unsplash_access_key}`,
                  numOfPhotos: 27,
                  page: currentPage
                })
                  .then(photosList => {
                    setCurrentPage(currentPage + 1);
                    setPhotos([...photos, photosList]);
                  })
                  .catch(err => {
                    console.error(err);
                  });
              }}
              loader={
                <div>
                  <LoadingIconContainer>
                    <img src={loadingIcon} alt="loading-icon" />
                  </LoadingIconContainer>
                </div>
              }>
              <ImageGridWrapper>{RenderImages(photos)}</ImageGridWrapper>
            </InfiniteScroll>
          )}
        </ImageGridContainer>
      </ImagesLoaded>
    </SectionWrapper>
  );
};

export default Section2;
