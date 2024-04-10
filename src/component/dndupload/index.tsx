import { IconButton } from "@mui/material";
import { UploadCloud, X } from "lucide-react";
import { webColors } from "../../assets/constant";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';


interface ImageFile extends FileWithPath {
    preview: string;
};

const DNDUpload = ({
  uploadedImage,
  setUploadedImage,
  defaultData,
}: {
  uploadedImage: any;
  setUploadedImage: any;
  defaultData: any;
}) => {
  const onDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    setUploadedImage(file);

    /* base64 */
    // const reader = new FileReader();
    // reader.onload = () => {
    //   setUploadedImage(reader.result);
    //   setUploadedImage((prev:any) => ({...prev , base : reader.result }));
    // };

    // reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const clearImage = () => {
    setUploadedImage(null);
  };

  useEffect(() => {
    if (defaultData) {
      setUploadedImage(defaultData);
    }
  }, [defaultData]);
  return (
    <div className="mb-5">
      {uploadedImage ? (
        <div style={{ ...previewStyle, position: "relative" }}>
          <img
            src={
              typeof uploadedImage === "string"
                ? uploadedImage
                : URL.createObjectURL(uploadedImage)
            }
            alt="Uploaded"
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
            className="img-fluid rounded-2"
          />
          <IconButton
            className="bg-white"
            style={{ position: "absolute", top: 15, right: 15 }}
            onClick={clearImage}
          >
            <X />
          </IconButton>
        </div>
      ) : (
        <div className="d-flex align-items-center" {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <div
            className="d-flex flex-column my-auto w-100 text-center"
            style={{ color: webColors.primary[500] }}
          >
            <span>
              <UploadCloud color={webColors.primary[500]} />
            </span>
            <span className="fs-16-600">Upload Image</span>
            <span>Drop your image here or click to upload image.</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default DNDUpload;

const dropzoneStyle = {
  borderRadius: "8px",
  padding: "20px",
  cursor: "pointer",
  border: `2px dashed ${webColors['primary']}`,
  background: webColors['primary-100'],
  height: 180,
};

const previewStyle = {
  width: "100%",
  height: "180px",
  borderRadius: "8px",
};

export const DNDGallery = ({images, setImages,defaultData}:any) => {
  useEffect(()=>{
    if(defaultData?.length>0){
      setImages(()=> defaultData)
    }
  }, [defaultData]);

  const [isHovered, setIsHovered] = useState<number | null>(null);
  const previewStyle = {
    width: '100%',
    height: '100px',
    borderRadius: '8px',
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: FileWithPath[]) => {
      setImages((prevImages:any) => [
        ...prevImages,
        ...acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })) as ImageFile[]
      ]);
    }
  });

  const removeImage = (index:any) => {
    setImages((prevImages:any) => prevImages.filter((_:any, i:number) => i !== index));
  };

  return ( <section className="container">
        <div  className="d-flex align-items-center"  {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            <div className="d-flex flex-column text-center w-100" style={{ color : webColors.primary[500]}}>
            <span><UploadCloud color={webColors.primary[500]} /></span>
            <span className="fs-16-600">Upload Image</span>
            <span>Drop your image here or click to upload image.</span>
            </div>
        </div>
      <aside>
        {images.length > 0 && <p className='mt-3 fs-18-600'>Images</p>}
        <Row>
          {images.map((file:any, index:number) => (
            <Col sm={4} key={index} className='mb-3'>
                <div onMouseEnter={()=>{setIsHovered(()=> index)}}
      onMouseLeave={()=>{setIsHovered(null)}} className="" style={{...previewStyle, position : 'relative' , outline : isHovered === index ? `2px solid ${webColors.primary[400]}` : "", outlineOffset : 3}}>
            <img src={file?.preview || file?.image} alt={`Image ${index}`} style={{height:'100%' , width : '100%' ,objectFit  : 'fill'}} className="img-fluid rounded-2" />
            <IconButton className="bg-white"  style={{position : 'absolute', top : 15 , right : 15  }} onClick={() => removeImage(index)}>
                <X />
            </IconButton>
            </div>
        </Col>
       ))}
        </Row>

        
      </aside>
    </section>);
};

