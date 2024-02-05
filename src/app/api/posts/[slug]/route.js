import { NextResponse } from "next/server";

// Get SIngle Post Page
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 })); // Fixed response object
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 } // Fixed response object
    );
  }
};
