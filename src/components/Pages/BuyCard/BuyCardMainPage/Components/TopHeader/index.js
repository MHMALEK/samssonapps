import React from "react";
import Card from "../../../../../UI/Card";
import Button from "../../../../../UI/Button";
const TopHeader = () => {
  return (
    <Card title="توجه">
      <p className="c-red">
        داوطلبان لازم است قبل از خرید کارت اعتباری گروه آزمایشی رشته یا رشته‌های
        مورد نظر خود را شناسایی نمایند.
      </p>
      <div className="button-wrapper">
        <Button blueBorder>فهرست رشته‌های مقطع کارشناسی پیوسته</Button>
      </div>
      <div className="button-wrapper">
        <Button blueBorder>فهرست رشته‌های مقطع کاردانی ناپیوسته</Button>
      </div>
    </Card>
  );
};

export default TopHeader;
