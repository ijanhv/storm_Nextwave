"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 text-sm text-center border-b hover:bg-gray-200 border-gray-300 bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;