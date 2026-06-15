const officeAssets = [
  {
    id: "ceo",
    label: "CEO",
    image: "/Office/publish/ceo.png",
    outline: "/Office/publish/ceo_outline.png",
    className: "ceoAsset",
  },
  {
    id: "secretary",
    label: "Secretary",
    image: "/Office/publish/secretary.png",
    outline: "/Office/publish/secretary_outline.png",
    className: "secretaryAsset",
  },
  {
    id: "employee1",
    label: "Employee 1",
    image: "/Office/publish/employee_1.png",
    outline: "/Office/publish/employee_1_outline.png",
    className: "employeeOneAsset",
  },
  {
    id: "employee2",
    label: "Employee 2",
    image: "/Office/publish/employee_2.png",
    outline: "/Office/publish/employee_2_outline.png",
    className: "employeeTwoAsset",
  },
  {
    id: "employee3",
    label: "Employee 3",
    image: "/Office/publish/employee_3.png",
    outline: "/Office/publish/employee_3_outline.png",
    className: "employeeThreeAsset",
  },
  {
    id: "employee4",
    label: "Employee 4",
    image: "/Office/publish/employee_4.png",
    outline: "/Office/publish/employee_4_outline.png",
    className: "employeeFourAsset",
  },
];

export function RoomScene() {
  return (
    <div className="roomArtwork">
      <img className="roomBackdrop" src="/Clear_Room.gif?v=1" alt="Pixel office room" />
      <div className="officeAssetLayer" aria-hidden="true">
        {officeAssets.map((asset, index) => (
          <div
            key={asset.id}
            className={`officeAssetItem ${asset.className}`}
            style={{ "--asset-delay": `${index * 0.18}s` } as CSSProperties}
          >
            <img className="officeAssetImage" src={`${asset.image}?v=3`} alt="" />
            <img
              className={`officeAssetOutline ${asset.id}Outline`}
              src={`${asset.outline}?v=3`}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="officeHotspots" aria-label="Office workstations">
        {officeAssets.map((asset) => (
          <button
            key={`${asset.id}-hotspot`}
            className={`officeHotspot ${asset.id}Hotspot`}
            type="button"
            aria-label={asset.label}
          />
        ))}
      </div>
    </div>
  );
}
import type { CSSProperties } from "react";
