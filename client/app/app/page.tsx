import AppSettings from "@/components/App/AppSettings";
import Card from "@/components/Card/Card";
import CardTitle from "@/components/Card/CardTitle";
import PresaleForm from "@/components/Presale/PresaleForm";
import PresaleStatus from "@/components/Presale/PresaleStatus";
import ShareTools from "@/components/Share/ShareTools";

export default function AppPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-8">
          <Card>
            <h1 className="text-3xl font-semibold">An app that automatically matches you on tinder and sends the best pick up line</h1>
          </Card>

          <Card>
            <CardTitle text="Presale is Live!" />
            <PresaleStatus />
          </Card>

          <Card>
            <CardTitle text="Build Your App" />
            <AppSettings />
          </Card>

          <Card>
            <CardTitle text="Share & Go Viral!" />
            <ShareTools />
          </Card>
        </div>

        <div className="col-span-1 md:col-span-4">
          <Card>
            <div className="bg-black md:bg-transparent border-t md:border-t-0 border-gray-700 p-6 md:p-0 fixed md:static bottom-0 start-0 end-0">
              <CardTitle text="Join Presale" />
              <PresaleForm />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}