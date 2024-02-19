import { Button } from "antd"
import { CloseOutlined } from '@ant-design/icons';
import { ButtonType } from "antd/es/button";

export const CancelButton = ({ type = "text", size = "middle", onClick }: { type?: ButtonType, size?: "small" | "middle", onClick: () => void }) => {
    return (
        <Button
            className="point-on"
            type={type}
            size={size}
            style={{ padding: "0px 8px" }}
            onClick={onClick}
        >
            <CloseOutlined />
        </Button>
    )
}