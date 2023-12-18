import React from 'react';
import Button from '~/components/library/Button/button';

const ButtonScreen: React.FC = () => {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center gap-4">
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button color="danger">danger</Button>
                <Button color="danger" uppercase>
                    uppercase
                </Button>
                <Button color="warning" uppercase shape="pill">
                    pill
                </Button>
                <Button color="success" uppercase shape="brick">
                    brick
                </Button>
                <Button color="success" uppercase shape="brick" size="xs">
                    xs
                </Button>
                <Button color="success" uppercase shape="brick" size="sm">
                    small
                </Button>
                <Button color="success" uppercase shape="brick" size="md">
                    medium
                </Button>
                <Button color="success" uppercase shape="brick" size="lg">
                    large
                </Button>
                <Button
                    color="success"
                    uppercase
                    shape="brick"
                    size="lg"
                    disabled
                >
                    disabled
                </Button>
                <Button uppercase link="https://www.youtube.com">
                    Link
                </Button>
                <Button uppercase link="https://www.youtube.com" color="danger">
                    Link
                </Button>
                <Button
                    uppercase
                    link="https://www.youtube.com"
                    color="success"
                >
                    Link
                </Button>
            </div>
        </>
    );
};

export default ButtonScreen;
